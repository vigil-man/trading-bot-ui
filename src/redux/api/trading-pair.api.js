import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Endpoint, ReducerPath } from '../../constant'
import { REHYDRATE } from 'redux-persist/es/constants'

export const tradingPairApi = createApi({
  reducerPath: ReducerPath.TRADING_PAIR,
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_CORE_BASE_URL }),
  extractRehydrationInfo (action, { reducerPath }) {
    if (action.type === REHYDRATE) {
      return action.payload?.[reducerPath]
    }
  },
  endpoints: builder => ({
    allPairs: builder.mutation({
      query: () => Endpoint.ALL_PAIRS
    }),
    allSymbols: builder.query({
      query: () => Endpoint.ALL_SYMBOLS
    })
  })
})

export const { useAllSymbolsQuery } = tradingPairApi
