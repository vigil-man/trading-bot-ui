import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import rootReducer from './redux/root-reducer'
import logger from 'redux-logger'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter } from 'react-router-dom'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import Header from './components/header/Header'
import Routes from './Routes'
import { tradingHistoryApi } from './redux/api/trading-history.api'
import { historicalDataApi } from './redux/api/historical-data.api'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist/es/constants'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [historicalDataApi.reducerPath]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const additionalMiddleware = [logger, tradingHistoryApi.middleware]

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }).concat(additionalMiddleware),
  devTools: process.env.NODE_ENV !== 'production'
}
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistStore(store)}
      >
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
