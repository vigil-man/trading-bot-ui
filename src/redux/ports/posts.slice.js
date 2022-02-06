import {createSlice} from '@reduxjs/toolkit'

const INITIAL_STATE = {
  botPort: '8080',
  cachePort: '9081',
}
const portsSlice = createSlice(
    {
      name: 'port',
      initialState: INITIAL_STATE,
      reducers: {
        updateBotPort: (state, action) => {
          state.botPort = action.payload
        },
        updateCachePort: (state, action) => {
          state.cachePort = action.payload
        }
      }
    }
)

export const {updateBotPort, updateCachePort} = portsSlice.actions

export default portsSlice
