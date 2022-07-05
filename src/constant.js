export const NEUTRAL_SCORE = 'NEUTRAL'

export const TradingActionColor = {
  BUY: '#41a84d',
  SELL: '#bf1c1c'
}

export const DefaultTradingHistoryResponse = {
  totalProfit: 0,
  totalCommission: 0,
  sharpeRatio: 0,
  ordersCount: 0,
  symbolPositions: {}
}

export const Endpoint = {
  CANDLES: '/historical-data/candles',
  STATS: '/historical-data/stats',
  HISTORY: '/history',
  STATE: '/state',
  SELL_BOUGHT: '/transaction/sell-bought',
  ALL_SYMBOLS: '/pair/all-symbols',
  ALL_PAIRS: '/pair/all',
  TOGGLE_TRADING: '/config/toggle-trading',
  TRADING_ENABLED: '/config/trading-enabled',
  SIMULATION: '/simulation',
  STRATEGY_RECORDS: '/cache/strategy'
}

export const ReducerPath = {
  TRADING_HISTORY: 'tradingHistoryApi',
  TRADING_STATE: 'tradingStateApi',
  TRADING_PAIR: 'tradingPairApi',
  SYMBOL: 'symbol',
  HISTORICAL_DATA: 'historicalDataApi',
  TRANSACTION: 'transactionApi',
  TRADING_CACHE: 'tradingCacheApi',
  SIMULATION: 'simulationApi',
  CONFIG: 'configApi'
}
