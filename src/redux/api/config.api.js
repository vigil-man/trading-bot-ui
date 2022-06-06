import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Endpoint, ReducerPath } from '../../constant'
import { REHYDRATE } from 'redux-persist/es/constants'

export const configApi = createApi({
  reducerPath: ReducerPath.CONFIG,
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_TRADING_BOT_URL }),
  extractRehydrationInfo (action, { reducerPath }) {
    if (action.type === REHYDRATE) {
      return action.payload?.[reducerPath]
    }
  },
  endpoints: builder => ({
    toggleTrading: builder.mutation({
      query: () => ({
        method: 'PUT',
        url: Endpoint.TOGGLE_TRADING
      })
    }),
    tradingEnabled: builder.query({
      query: () => Endpoint.TRADING_ENABLED
    })
  })
})

export const { useToggleTradingMutation, useTradingEnabledQuery } = configApi
