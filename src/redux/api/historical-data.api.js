import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Endpoint, ReducerPath } from '../../constant'
import { REHYDRATE } from 'redux-persist/es/constants'

export const historicalDataApi = createApi({
  reducerPath: ReducerPath.HISTORICAL_DATA,
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_TRADING_BOT_URL }),
  extractRehydrationInfo (action, { reducerPath }) {
    if (action.type === REHYDRATE) {
      return action.payload?.[reducerPath]
    }
  },
  endpoints: builder => ({
    candles: builder.mutation({
      query: ({ symbol, fromTimestamp, toTimestamp, intervalSeconds }) => (
        {
          url: `${Endpoint.CANDLES}/${symbol}`,
          params: { fromTimestamp, toTimestamp, intervalSeconds }
        })
    }),
    stats: builder.mutation({
      query: ({ fromTimestamp, toTimestamp }) => (
        {
          url: Endpoint.STATS,
          params: { fromTimestamp, toTimestamp }
        })
    })
  })
})

export const { useCandlesMutation, useStatsMutation } = historicalDataApi
