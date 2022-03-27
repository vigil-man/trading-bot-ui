import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import ky from 'ky'
import { RequestStatus } from '../request.statuses'

const INITIAL_STATE = {
  tradingEnabled: false,
  botUrl: 'http://localhost:8080',
  status: RequestStatus.IDLE,
  error: null
}

export const toggleTrading = createAsyncThunk('config/toggleTrading', async payload => {
  return await ky.post(payload).json()
})

const configSlice = createSlice(
  {
    name: 'config',
    initialState: INITIAL_STATE,
    reducers: {
      updateBotUrl: (state, action) => {
        state.botUrl = action.payload
      }
    },
    extraReducers: {
      [toggleTrading.pending]: (state) => {
        state.status = RequestStatus.LOADING
      },
      [toggleTrading.fulfilled]: (state, { payload }) => {
        state.status = RequestStatus.SUCCESS
        state.tradingEnabled = payload
      },
      [toggleTrading.rejected]: (state, { payload, error }) => {
        state.status = RequestStatus.ERROR
        state.error = payload || error.message
      }
    }
  }
)

export const { updateBotUrl } = configSlice.actions

export default configSlice
