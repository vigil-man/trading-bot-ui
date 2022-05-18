import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Endpoint, ReducerPath } from '../../constant'
import { REHYDRATE } from 'redux-persist/es/constants'

export const tradingStateApi = createApi({
  reducerPath: ReducerPath.TRADING_STATE,
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_CORE_BASE_URL }),
  extractRehydrationInfo (action, { reducerPath }) {
    if (action.type === REHYDRATE) {
      return action.payload?.[reducerPath]
    }
  },
  endpoints: builder => ({
    tradingState: builder.mutation({
      query: () => Endpoint.STATE
    })
  })
})

export const { useTradingStateMutation } = tradingStateApi
