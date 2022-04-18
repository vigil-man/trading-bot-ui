import { combineReducers } from 'redux'
import datePickerSlice from './date-picker/date-picker.slice'
import configSlice from './config/config.slice'
import symbolSlice from './symbol/symbol.slice'
import tradingStateSlice from './trading-state/trading-state.slice'
import { tradingHistoryApi } from './api/trading-history.api'
import { historicalDataApi } from './api/historical-data.api'
import { simulationApi } from './api/simulation.api'

export default combineReducers({
  tradingState: tradingStateSlice.reducer,
  datePicker: datePickerSlice.reducer,
  config: configSlice.reducer,
  symbol: symbolSlice.reducer,
  [tradingHistoryApi.reducerPath]: tradingHistoryApi.reducer,
  [historicalDataApi.reducerPath]: historicalDataApi.reducer,
  [simulationApi.reducerPath]: simulationApi.reducer
})
