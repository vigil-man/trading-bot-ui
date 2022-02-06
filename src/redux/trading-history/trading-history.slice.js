import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import ky from 'ky'
import { RequestStatus } from '../request.statuses'

const INITIAL_STATE = {
  tradingHistory: {
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
  },
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

export const getSimulationHistory = createAsyncThunk('tradingHistory/getSimulationHistory', async payload => {
  return await ky.get(payload, { timeout: false }).json()
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
      },
      [getSimulationHistory.pending]: (state) => {
        state.status = RequestStatus.LOADING
      },
      [getSimulationHistory.fulfilled]: (state, { payload }) => {
        state.status = RequestStatus.SUCCESS
        state.tradingHistory = payload
      },
      [getSimulationHistory.rejected]: (state, { payload, error }) => {
        state.status = RequestStatus.ERROR
        state.error = payload || error.message
      }
    }
  }
)

export default tradingHistorySlice
