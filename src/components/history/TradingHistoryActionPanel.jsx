import { Grid, GridColumn } from 'semantic-ui-react'
import DateRangePicker from '../DateRangePicker'
import GetTradingHistoryButton from './actions/GetTradingHistoryButton'

const TradingHistoryActionPanel = () =>
  <Grid centered padded>
    <GridColumn width={3} verticalAlign={'middle'}>
      <GetTradingHistoryButton/>
    </GridColumn>
    <GridColumn width={3}>
      <DateRangePicker/>
    </GridColumn>
  </Grid>

export default TradingHistoryActionPanel