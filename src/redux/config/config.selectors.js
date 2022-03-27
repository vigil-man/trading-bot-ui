import { createSelector } from 'reselect'

const configSlice = state => state.config

export const selectTradingEnabled = createSelector(
  [configSlice],
  configSlice => configSlice.tradingEnabled
)

export const selectBotUrl = createSelector(
  [configSlice],
  configSlice => configSlice.botUrl
)

export const selectConfigStatus = createSelector(
  [configSlice],
  configSlice => configSlice.status
)

export const selectConfigError = createSelector(
  [configSlice],
  configSlice => configSlice.error
)
