export const Constants = {
  dateTimeFormat: 'yyyy MMM/DD - HH:mm',
  neutralScore: 'NEUTRAL'
}

export const ScoreTypesColorMap = {
  BUY: '#41a84d',
  SELL: '#bf1c1c'
}

export const DefaultTradingHistoryState =
{
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
