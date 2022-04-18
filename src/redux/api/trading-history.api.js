import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Endpoint, ReducerPath } from '../../constant'
import { REHYDRATE } from 'redux-persist/es/constants'

export const tradingHistoryApi = createApi({
  reducerPath: ReducerPath.TRADING_HISTORY,
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_CORE_BASE_URL }),
  extractRehydrationInfo (action, { reducerPath }) {
    if (action.type === REHYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: builder => ({
    tradingHistory: builder.mutation({
      query: ({ fromTimestamp, toTimestamp }) => (
        {
          url: Endpoint.HISTORY,
          params: { fromTimestamp, toTimestamp }
        })
    }),
    simulationHistory: builder.mutation({
      query: ({ fromTimestamp, toTimestamp }) => (
        {
          url: Endpoint.SIMULATION,
          params: { fromTimestamp, toTimestamp }
        })
    })
  })
})

export const { useTradingHistoryMutation, useSimulationHistoryMutation } = tradingHistoryApi
