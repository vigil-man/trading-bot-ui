import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Endpoint, ReducerPath } from '../../constant'

export const transactionApi = createApi({
  reducerPath: ReducerPath.TRANSACTION,
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_CORE_BASE_URL }),
  endpoints: builder => ({
    sellBought: builder.mutation({
      query: () => Endpoint.SELL_BOUGHT
    })
  })
})

export const { useSellBoughtMutation } = transactionApi
