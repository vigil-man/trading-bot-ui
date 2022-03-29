import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import ky from 'ky'
import { RequestStatus } from '../request.statuses'
import { DefaultTradingHistoryState } from '../../constants'

const INITIAL_STATE = {
  simulation: DefaultTradingHistoryState,
  status: RequestStatus.IDLE,
  error: null
}

export const executeSimulation = createAsyncThunk('simulation/executeSimulation', async payload => (
  ky.post(
    payload.url,
    { json: payload.body, timeout: false }
  ).json()
))

const simulationSlice = createSlice(
  {
    name: 'simulation',
    initialState: INITIAL_STATE,
    extraReducers: {
      [executeSimulation.pending]: (state) => {
        state.status = RequestStatus.LOADING
      },
      [executeSimulation.fulfilled]: (state, { payload }) => {
        state.status = RequestStatus.SUCCESS
        state.simulation = payload
      },
      [executeSimulation.rejected]: (state, { payload, error }) => {
        state.status = RequestStatus.ERROR
        state.error = payload || error.message
      }
    }
  }
)

export default simulationSlice
