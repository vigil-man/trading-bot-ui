export const NEUTRAL_SCORE = 'NEUTRAL'

export const TradingActionColor = {
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
  CANDLES: '/historical-data/candles',
  HISTORY: '/history',
  HISTORY_SIMULATION: '/history/simulation',
  STATE: '/state',
  TRANSACTION_SELL_BOUGHT: '/transaction/sell-bought',
  PAIR_GET_SYMBOLS: '/pair/all-symbols',

  CONFIG_TOGGLE_TRADING: '/config/toggle-trading',
  SIMULATION: '/simulation'
}

export const ReducerPath = {
  TRADING_HISTORY: 'tradingHistoryApi',
  HISTORICAL_DATA: 'historicalDataApi',
  SIMULATION: 'simulationApi'
}
