import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import TradingPairsHistoryTable from './pairs-table/TradingPairsHistoryTable'
import TradingHistoryStatistics from './TradingHistoryStatistics'
import TradingHistoryActionPanel from './TradingHistoryActionPanel'

const TradingHistory = () => {
  return (
    <Grid centered>
      <GridRow>
        <GridColumn>
          <TradingHistoryActionPanel/>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn>
          <TradingHistoryStatistics/>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn width={15}>
          <TradingPairsHistoryTable/>
        </GridColumn>
      </GridRow>
    </Grid>
  )
}

export default TradingHistory