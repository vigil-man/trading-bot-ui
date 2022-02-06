import { Route, Switch } from 'react-router-dom'
import TradingSimulation from './components/simulation/TradingSimulation'
import TotalEquityGraph from './components/TotalEquityGraph'
import TradingPairHistoryContainer from './components/history/TradingPairHistoryContainer'
import React from 'react'
import TradingHistory from './components/history/TradingHistory'
import TradingActivity from './components/activity/TradingActivity'

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <TradingActivity/>
    </Route>
    <Route path="/simulation">
      <TradingSimulation/>
    </Route>
    <Route path="/graphs">
      <TotalEquityGraph/>
    </Route>
    <Route exact path="/history">
      <TradingHistory/>
    </Route>
    <Route path="/history/:symbol">
      <TradingPairHistoryContainer/>
    </Route>
  </Switch>
)

export default Routes