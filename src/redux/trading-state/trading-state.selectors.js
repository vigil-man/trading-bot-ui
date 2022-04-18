import { createSelector } from 'reselect'

const stateSlice = state => state.tradingState

export const selectTradingStateSummary = createSelector(
  stateSlice,
  stateSlice => stateSlice.tradingStateSummary
)

export const selectTradingStatePairs = createSelector(
  selectTradingStateSummary,
  stateSummary => stateSummary.pairActivities
)

export const selectTradingStateStatus = createSelector(
  stateSlice,
  stateSlice => stateSlice.status
)

export const selectTradingStateError = createSelector(
  stateSlice,
  stateSlice => stateSlice.error
)
