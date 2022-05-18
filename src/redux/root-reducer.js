import { combineReducers } from 'redux'
import datePickerSlice from './slice/date-picker.slice'
import symbolSlice from './slice/symbol.slice'
import { tradingHistoryApi } from './api/trading-history.api'
import { historicalDataApi } from './api/historical-data.api'
import { simulationApi } from './api/simulation.api'
import { tradingStateApi } from './api/trading-state.api'
import { tradingPairApi } from './api/trading-pair.api'
import { configApi } from './api/config.api'
import { transactionApi } from './api/transaction.api'
import { tradingCacheApi } from './api/trading-cache.api'

export default combineReducers({
  datePicker: datePickerSlice.reducer,
  symbol: symbolSlice.reducer,
  [tradingHistoryApi.reducerPath]: tradingHistoryApi.reducer,
  [tradingStateApi.reducerPath]: tradingStateApi.reducer,
  [tradingPairApi.reducerPath]: tradingPairApi.reducer,
  [historicalDataApi.reducerPath]: historicalDataApi.reducer,
  [simulationApi.reducerPath]: simulationApi.reducer,
  [configApi.reducerPath]: configApi.reducer,
  [transactionApi.reducerPath]: transactionApi.reducer,
  [tradingCacheApi.reducerPath]: tradingCacheApi.reducer
})
