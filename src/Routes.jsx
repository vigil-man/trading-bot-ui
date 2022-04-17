import { Route, Switch } from 'react-router-dom'
import Simulation from './components/simulation/Simulation'
import EquityGraphs from './components/EquityGraphs'
import TradingPairHistoryContainer from './components/history/TradingPairHistoryContainer'
import React from 'react'
import TradingHistory from './components/history/TradingHistory'
import TradingState from './components/state/TradingState'

const Routes = () => (
  <Switch>
    <Route exact path='/'>
      <TradingState />
    </Route>
    <Route path='/simulation'>
      <Simulation />
    </Route>
    <Route path='/graphs'>
      <EquityGraphs />
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
