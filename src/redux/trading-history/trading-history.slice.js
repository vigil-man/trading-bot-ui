import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import ky from 'ky'
import { RequestStatus } from '../request.statuses'
import { DefaultTradingHistoryState } from '../../constants'

const INITIAL_STATE = {
  tradingHistory: DefaultTradingHistoryState,
  status: RequestStatus.IDLE,
  error: null
}

export const getTradingHistory = createAsyncThunk('tradingHistory/getTradingHistory', async payload => {
  const searchParams = {
    fromTimestamp: payload.fromTimestamp,
    toTimestamp: payload.toTimestamp
  }
  return await ky.get(payload.url, { searchParams: searchParams, timeout: false }).json()
})

const tradingHistorySlice = createSlice(
  {
    name: 'tradingHistory',
    initialState: INITIAL_STATE,
    extraReducers: {
      [getTradingHistory.pending]: (state) => {
        state.status = RequestStatus.LOADING
      },
      [getTradingHistory.fulfilled]: (state, { payload }) => {
        state.status = RequestStatus.SUCCESS
        state.tradingHistory = payload
      },
      [getTradingHistory.rejected]: (state, { payload, error }) => {
        state.status = RequestStatus.ERROR
        state.error = payload || error.message
      }
    }
  }
)

export default tradingHistorySlice
