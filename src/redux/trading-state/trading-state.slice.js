import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import ky from 'ky'
import { RequestStatus } from '../request.statuses'

const INITIAL_STATE = {
  tradingStateSummary: [],
  status: RequestStatus.IDLE,
  error: null
}

export const fetchTradingStateSummary = createAsyncThunk('trading-state/summary', async payload => {
  return await ky.get(payload, { timeout: false }).json()
})

const tradingStateSlice = createSlice(
  {
    name: 'tradingState',
    initialState: INITIAL_STATE,
    extraReducers: {
      [fetchTradingStateSummary.pending]: (state) => {
        state.status = RequestStatus.LOADING
      },
      [fetchTradingStateSummary.fulfilled]: (state, { payload }) => {
        state.status = RequestStatus.SUCCESS
        state.tradingStateSummary = payload
      },
      [fetchTradingStateSummary.rejected]: (state, { payload, error }) => {
        state.status = RequestStatus.ERROR
        state.error = payload || error.message
      }
    }
  }
)

export default tradingStateSlice
