import { Grid, GridColumn } from 'semantic-ui-react'
import StartTradingButton from './actions/StartTradingButton'
import SellBoughtButton from './actions/SellBoughtButton'
import RefreshActivitySummaryButton from './actions/RefreshActivitySummaryButton'
import TradingActivityStatistics from './TradingActivityStatistics'

const TradingActivityActionPanel = () =>
  <Grid centered padded verticalAlign={'middle'}>
    <GridColumn width={3}>
      <SellBoughtButton/>
    </GridColumn>
    <GridColumn width={3}>
      <StartTradingButton/>
    </GridColumn>
    <GridColumn width={4}>
      <RefreshActivitySummaryButton/>
    </GridColumn>
    <GridColumn width={6}>
      <TradingActivityStatistics/>
    </GridColumn>
  </Grid>

export default TradingActivityActionPanel