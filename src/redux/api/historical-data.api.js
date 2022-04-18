import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Endpoint, ReducerPath } from '../../constant'

export const historicalDataApi = createApi({
  reducerPath: ReducerPath.HISTORICAL_DATA,
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_CORE_BASE_URL }),
  endpoints: builder => ({
    candles: builder.mutation({
      query: ({ symbol, fromTimestamp, toTimestamp, intervalSeconds }) => (
        {
          url: `${Endpoint.CANDLES}/${symbol}`,
          params: { fromTimestamp, toTimestamp, intervalSeconds }
        })
    })
  })
})

export const { useCandlesMutation } = historicalDataApi
