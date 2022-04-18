import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Endpoint, ReducerPath } from '../../constant'

export const simulationApi = createApi({
  reducerPath: ReducerPath.SIMULATION,
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_CORE_BASE_URL }),
  endpoints: builder => ({
    simulate: builder.mutation({
      query: requestBody => (
        {
          method: 'POST',
          url: Endpoint.SIMULATION,
          body: requestBody
        })
    })
  })
})

export const { useSimulateMutation } = simulationApi
