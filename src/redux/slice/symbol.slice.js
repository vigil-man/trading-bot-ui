import { createSlice } from '@reduxjs/toolkit'
import { ReducerPath } from '../../constant'
import { createSelector } from 'reselect'

const INITIAL_STATE = {
  chosenSymbols: [],
  useAll: false
}

const symbolSlice = createSlice(
  {
    name: ReducerPath.SYMBOL,
    initialState: INITIAL_STATE,
    reducers: {
      updateChosenSymbols: (state, action) => {
        state.chosenSymbols = action.payload
      },
      toggleUseAllSymbols: (state) => {
        state.useAll = !state.useAll
      }
    }
  }
)

const selectSymbolSlice = state => state.symbol

export const selectChosenSymbols = createSelector(
  [selectSymbolSlice],
  selectSymbolSlice => selectSymbolSlice.chosenSymbols
)

export const selectUseAllSymbols = createSelector(
  [selectSymbolSlice],
  selectSymbolSlice => selectSymbolSlice.useAll
)

export const { updateChosenSymbols, toggleUseAllSymbols } = symbolSlice.actions

export default symbolSlice
