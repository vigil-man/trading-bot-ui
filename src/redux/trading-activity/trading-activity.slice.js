import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import ky from 'ky'
import { RequestStatus } from '../request.statuses'

const INITIAL_STATE = {
  activitySummary: [],
  status: RequestStatus.IDLE,
  error: null
}

export const fetchActivitySummary = createAsyncThunk('activity/summary', async payload => {
  return await ky.get(payload, { timeout: false }).json()
})

const tradingActivitySlice = createSlice(
  {
    name: 'tradingActivity',
    initialState: INITIAL_STATE,
    extraReducers: {
      [fetchActivitySummary.pending]: (state) => {
        state.status = RequestStatus.LOADING
      },
      [fetchActivitySummary.fulfilled]: (state, { payload }) => {
        state.status = RequestStatus.SUCCESS
        state.activitySummary = payload
      },
      [fetchActivitySummary.rejected]: (state, { payload, error }) => {
        state.status = RequestStatus.ERROR
        state.error = payload || error.message
      }
    }
  }
)

export default tradingActivitySlice
