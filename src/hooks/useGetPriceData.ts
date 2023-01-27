import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useMulticallContract } from './useContract'
import ERC20_INTERFACE from '../constants/abis/erc20'
import priceContracts from '../constants/eggPriceContracts'

type ApiResponse = {
  prices: {
    [key: string]: string
  }
  update_at: string
}

/**
 * Due to Cors the api was forked and a proxy was created
 * @see https://github.com/pancakeswap/gatsby-pancake-api/commit/e811b67a43ccc41edd4a0fa1ee704b2f510aa0ba
 */
const api = 'https://api.pancakeswap.com/api/v1/price'

const useGetPriceData = () => {
  const [data, setData] = useState<number>(0)

  const multicallContract = useMulticallContract();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if(multicallContract){
          const {frostAddress, usdcAddress, lpAddress} = priceContracts;
          const calls = [
            [frostAddress, ERC20_INTERFACE.encodeFunctionData("balanceOf", [lpAddress])],
            [usdcAddress, ERC20_INTERFACE.encodeFunctionData("balanceOf", [lpAddress])],
          ];

          const [resultsBlockNumber, result] = await multicallContract.aggregate(calls);
          const [frostAmount, usdcAmount] = result.map(r=>ERC20_INTERFACE.decodeFunctionResult("balanceOf", r));
          const frost = new BigNumber(frostAmount);
          const usdc = new BigNumber(usdcAmount);
          const frostPrice = usdc.multipliedBy(1e12).div(frost).toNumber(); // Multiply by the missing decimals (6 vs 18)
          setData(frostPrice)
        }
      } catch (error) {
        console.error('Unable to fetch price data:', error)
      }
    }

    fetchData()
  }, [multicallContract])

  return data
}

export default useGetPriceData
