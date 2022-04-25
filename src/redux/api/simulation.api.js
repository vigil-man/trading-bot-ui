import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Endpoint, ReducerPath } from '../../constant'
import { REHYDRATE } from 'redux-persist/es/constants'

export const simulationApi = createApi({
  reducerPath: ReducerPath.SIMULATION,
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_STRATEGY_BASE_URL }),
  extractRehydrationInfo (action, { reducerPath }) {
    if (action.type === REHYDRATE) {
      return action.payload?.[reducerPath]
    }
  },
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
