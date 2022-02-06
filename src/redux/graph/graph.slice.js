import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import ky from 'ky'
import { RequestStatus } from '../request.statuses'

const INITIAL_STATE = {
  graphData: [],
  status: RequestStatus.IDLE,
  error: null
}

export const getGraphData = createAsyncThunk('graph/getData', async payload => {
  const searchParams = {
    from: payload.from,
    to: payload.to
  }
  return await ky.get(payload.url, { searchParams: searchParams }).json()
})

const graphSlice = createSlice(
  {
    name: 'graph',
    initialState: INITIAL_STATE,
    reducers: {
      clearGraphData: (state) => {
        state.graphData = []
      }
    },
    extraReducers: {
      [getGraphData.pending]: (state) => {
        state.status = RequestStatus.LOADING
      },
      [getGraphData.fulfilled]: (state, { payload }) => {
        state.status = RequestStatus.SUCCESS
        state.graphData = payload
      },
      [getGraphData.rejected]: (state, { payload, error }) => {
        state.status = RequestStatus.ERROR
        state.error = payload || error.message
      }
    }
  }
)

export const { clearGraphData } = graphSlice.actions

export default graphSlice
