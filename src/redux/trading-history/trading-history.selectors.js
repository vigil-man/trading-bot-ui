import { createSelector } from 'reselect'

const tradingHistorySlice = state => state.tradingHistory

export const selectTradingHistory = createSelector(
  tradingHistorySlice,
  tradingHistorySlice => tradingHistorySlice.tradingHistory
)

export const selectTradingPairs = createSelector(
  selectTradingHistory,
  tradingHistory => tradingHistory.tradingPairs
)

export const selectTradingHistoryStatus = createSelector(
  tradingHistorySlice,
  tradingHistorySlice => tradingHistorySlice.status
)

export const selectTradingHistoryError = createSelector(
  tradingHistorySlice,
  tradingHistorySlice => tradingHistorySlice.error
)
