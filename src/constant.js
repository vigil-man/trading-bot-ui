export const Common = {
  dateTimeFormat: 'yyyy MMM/DD - HH:mm',
  neutralScore: 'NEUTRAL'
}

export const ScoreTypesColor = {
  BUY: '#41a84d',
  SELL: '#bf1c1c'
}

export const DefaultTradingHistoryState = {
  totalProfit: 0,
  avgProfit: 0,
  avgPriceDeltaPercent: 0,
  tradingPairs: {},
  positiveTradesProfit: 0,
  negativeTradesProfit: 0,

  notFilledOrdersCount: 0,
  filledOrdersCount: 0,
  semiFilledOrdersCount: 0,
  positiveTradesCount: 0,
  negativeTradesCount: 0,
  zeroTradesCount: 0
}

export const Endpoint = {
  GRAPH: '/graph',
  HISTORY: '/history',
  HISTORY_SIMULATION: '/history/simulation',
  STATE: '/state',
  TRANSACTION_SELL_BOUGHT: '/transaction/sell-bought',
  PAIR_GET_SYMBOLS: '/pair/all-symbols',

  CONFIG_TOGGLE_TRADING: '/config/toggle-trading',
  SIMULATION: '/simulation'
}
