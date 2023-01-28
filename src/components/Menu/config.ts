import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: '❄️ Home ❄️',
    icon: 'HomeIcon',
    href: 'https://frostswap.app/'
  },
  {
    label: '❄️ Trade ❄️',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: '❄️ Exchange ❄️',
        href: '/swap'
      },
      {
        label: '❄️ Liquidity ❄️',
        href: '/pool'
      }
    ]
  },
  {
    label: '❄️ Farms ❄️',
    icon: 'FarmIcon',
    href: 'https://frostswap.app/#/farms'
  },
  {
    label: '❄️ Pools ❄️',
    icon: 'PoolIcon',
    // href: 'https://www.frostswap.app/nests'
    href: 'https://frostswap.app/#/nests'
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://www.goosedefi.com/lottery'
  // },
  {
    label: '❄️ Info ❄️',
    icon: 'InfoIcon',
    items: [
      // {
      //   label: 'FrostSwap',
      //   href: 'https://frostswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
      // },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/frostswap-finance',
      // },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/frostswap-finance/',
      // },
      {
        label: '❄️ DexScreener ❄️',
        href: 'https://dexscreener.com/arbitrum/0x6dc1d800eade7494a3f7aea2958a89ccbd09dcef',
      },
    ]
  },
  {
    label: '❄️ More ❄️',
    icon: 'MoreIcon',
    items: [
      {
        label: "❄️ Github ❄️",
        href: "https://github.com/",
      },
      {
        label: "❄️ Docs ❄️",
        href: "https://frostswap.gitbook.io/frostswap-finance/",
      },
      // {
      //   label: "Blog",
      //   href: "https://frostswap.medium.com/",
      // },
    ],
  },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/frostswap-finance',
  // },
]

export default config
