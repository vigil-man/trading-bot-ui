import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Endpoint, ReducerPath } from '../../constant'

export const tradingCacheApi = createApi({
  reducerPath: ReducerPath.TRADING_CACHE,
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_TRADING_BOT_URL }),
  endpoints: builder => ({
    strategyRecords: builder.mutation({
      query: ({ symbol, fromTimestamp, toTimestamp }) => (
        {
          url: `${Endpoint.STRATEGY_RECORDS}/${symbol}`,
          params: { fromTimestamp, toTimestamp }
        })
    })
  })
})

export const { useStrategyRecordsMutation } = tradingCacheApi
