import { combineReducers } from 'redux'
import graphSlice from './graph/graph.slice'
import tradingHistorySlice from './trading-history/trading-history.slice'
import datePickerSlice from './date-picker/date-picker.slice'
import configSlice from './config/config.slice'
import symbolSlice from './symbol/symbol.slice'
import tradingActivitySlice from './trading-activity/trading-activity.slice'
import simulationSlice from './simulation/simulation.slice'

export default combineReducers({
  graph: graphSlice.reducer,
  tradingHistory: tradingHistorySlice.reducer,
  simulation: simulationSlice.reducer,
  tradingActivity: tradingActivitySlice.reducer,
  datePicker: datePickerSlice.reducer,
  config: configSlice.reducer,
  symbol: symbolSlice.reducer
})
