import { Route, Switch } from 'react-router-dom'
import Simulation from './components/simulation/Simulation'
import ProfitGraphs from './components/ProfitGraphs'
import TradingPairHistoryContainer from './components/history/pair/TradingPairHistoryContainer'
import React from 'react'
import TradingHistory from './components/history/TradingHistory'
import TradingState from './components/state/TradingState'
import HistoricalStats from './components/stats/HistoricalStats'

const Routes = () => (
  <Switch>
    <Route exact path='/'>
      <TradingState />
    </Route>
    <Route path='/simulation'>
      <Simulation />
    </Route>
    <Route path='/stats'>
      <HistoricalStats />
    </Route>
    <Route path='/graphs'>
      <ProfitGraphs />
    </Route>
    <Route exact path='/history'>
      <TradingHistory />
    </Route>
    <Route path='/history/:symbol'>
      <TradingPairHistoryContainer />
    </Route>
  </Switch>
)

export default Routes
