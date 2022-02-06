import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import ky from 'ky'
import { RequestStatus } from '../request.statuses'

const INITIAL_STATE = {
  symbols: [],
  chosenSymbols: [],
  useAll: false,
  status: RequestStatus.IDLE,
  error: null
}

export const fetchAllSymbols = createAsyncThunk('symbol/fetchAll', async payload => {
  return await ky.get(payload).json()
})

const symbolSlice = createSlice(
  {
    name: 'symbol',
    initialState: INITIAL_STATE,
    reducers: {
      updateChosenSymbols: (state, action) => {
        state.chosenSymbols = action.payload
      },
      toggleUseAllSymbols: (state) => {
        state.useAll = !state.useAll
      }
    },
    extraReducers: {
      [fetchAllSymbols.pending]: (state) => {
        state.status = RequestStatus.LOADING
      },
      [fetchAllSymbols.fulfilled]: (state, { payload }) => {
        state.status = RequestStatus.SUCCESS
        state.symbols = payload
      },
      [fetchAllSymbols.rejected]: (state, { payload, error }) => {
        state.status = RequestStatus.ERROR
        state.error = payload || error.message
      }
    }
  }
)

export const { updateChosenSymbols, toggleUseAllSymbols } = symbolSlice.actions

export default symbolSlice
