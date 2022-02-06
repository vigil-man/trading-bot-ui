import { combineReducers } from 'redux'
import graphSlice from './graph/graph.slice'
import tradingHistorySlice from './trading-history/trading-history.slice'
import datePickerSlice from './date-picker/date-picker.slice'
import portsSlice from './ports/posts.slice'
import configSlice from './config/config.slice'
import symbolSlice from './symbol/symbol.slice'
import tradingActivitySlice from './trading-activity/trading-activity.slice'

export default combineReducers({
  graph: graphSlice.reducer,
  tradingHistory: tradingHistorySlice.reducer,
  tradingActivity: tradingActivitySlice.reducer,
  datePicker: datePickerSlice.reducer,
  ports: portsSlice.reducer,
  config: configSlice.reducer,
  symbol: symbolSlice.reducer
})