import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist/es/constants'
import { tradingHistoryApi } from './api/trading-history.api'
import { tradingStateApi } from './api/trading-state.api'
import { tradingPairApi } from './api/trading-pair.api'
import { historicalDataApi } from './api/historical-data.api'
import { simulationApi } from './api/simulation.api'
import { configApi } from './api/config.api'
import { transactionApi } from './api/transaction.api'
import { tradingCacheApi } from './api/trading-cache.api'
import { rtkQueryErrorLogger } from './middleware/error-logger'
import rootReducer from './root-reducer'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

const getMiddleware = additionalMiddleware =>
  getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }).concat(additionalMiddleware)

export default function configureAppStore () {
  const persistConfig = {
    key: 'root',
    storage
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const additionalMiddleware = [
    tradingHistoryApi.middleware,
    tradingStateApi.middleware,
    tradingPairApi.middleware,
    historicalDataApi.middleware,
    simulationApi.middleware,
    configApi.middleware,
    transactionApi.middleware,
    tradingCacheApi.middleware,
    rtkQueryErrorLogger
  ]

  if (process.env.NODE_ENV !== 'production') {
    additionalMiddleware.push(logger)
  }

  return configureStore(
    {
      reducer: persistedReducer,
      middleware: getMiddleware(additionalMiddleware)
    }
  )
}
