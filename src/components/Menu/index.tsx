import React, { useContext } from 'react'
import { Menu as UikitMenu, ConnectorId } from '@pancakeswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'constants/localisation/languageCodes'
import { LanguageContext } from 'hooks/LanguageContext'
import useTheme from 'hooks/useTheme'
import useGetPriceData from 'hooks/useGetPriceData'
import { injected } from 'connectors'
import links from './config'

const Menu: React.FC = props => {
  const { account, activate, deactivate } = useWeb3React()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const frostPriceUsd = useGetPriceData()

  return (
    <UikitMenu
      links={links}
      priceLink="https://www.coingecko.com/en/coins/frostswap-finance"
      account={account as string}
      login={(connectorId: ConnectorId) => {
        // if (connectorId === 'walletconnect') {
        //   return activate(walletconnect)
        // }

        // if (connectorId === 'bsc') {
        //   return activate(bsc)
        // }

        return activate(injected)
      }}
      logout={deactivate}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage?.code || ''}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      frostPriceUsd={frostPriceUsd}
      {...props}
    />
  )
}

export default Menu
