import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Endpoint, ReducerPath } from '../../constant'

export const transactionApi = createApi({
  reducerPath: ReducerPath.TRANSACTION,
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_TRADING_BOT_URL }),
  endpoints: builder => ({
    closePositions: builder.mutation({
      query: () => (
        {
          method: 'PUT',
          url: Endpoint.CLOSE_POSITIONS
        }
      )
    }),
    alignPositions: builder.mutation({
      query: () => (
        {
          method: 'PUT',
          url: Endpoint.ALIGN_POSITIONS
        }
      )
    })
  })
})

export const { useClosePositionsMutation, useAlignPositionsMutation } = transactionApi
