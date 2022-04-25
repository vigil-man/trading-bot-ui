import { Grid, GridColumn } from 'semantic-ui-react'
import StartTradingButton from './actions/StartTradingButton'
import SellBoughtButton from './actions/SellBoughtButton'
import FetchTradingStateButton from './actions/FetchTradingStateButton'
import TradingStateStats from './TradingStateStats'

const TradingStateActionPanel = () =>
  <Grid centered padded verticalAlign='middle'>
    <GridColumn width={3}>
      <SellBoughtButton />
    </GridColumn>
    <GridColumn width={3}>
      <StartTradingButton />
    </GridColumn>
    <GridColumn width={4}>
      <FetchTradingStateButton />
    </GridColumn>
    <GridColumn width={6}>
      <TradingStateStats />
    </GridColumn>
  </Grid>

export default TradingStateActionPanel
