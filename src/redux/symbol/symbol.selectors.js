import { createSelector } from 'reselect'

const symbolSlice = state => state.symbol

export const selectSymbols = createSelector(
  [symbolSlice],
  symbolSlice => symbolSlice.symbols
)

export const selectChosenSymbols = createSelector(
  [symbolSlice],
  symbolSlice => symbolSlice.chosenSymbols
)

export const selectUseAllSymbols = createSelector(
  [symbolSlice],
  symbolSlice => symbolSlice.useAll
)

export const selectSymbolsStatus = createSelector(
  [symbolSlice],
  symbolSlice => symbolSlice.status
)

export const selectSymbolsError = createSelector(
  [symbolSlice],
  symbolSlice => symbolSlice.error
)
