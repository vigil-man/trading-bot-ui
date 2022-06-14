import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import TradingPairsStatsTable from './pairs-table/TradingPairsStatsTable'
import HistoricalStatsActionPanel from './HistoricalStatsActionPanel'

const HistoricalStats = () =>
  <Grid centered padded>
    <GridRow>
      <GridColumn width={15}>
        <HistoricalStatsActionPanel />
      </GridColumn>
    </GridRow>
    <GridRow verticalAlign='middle'>
      <GridColumn width={15}>
        <TradingPairsStatsTable />
      </GridColumn>
    </GridRow>
  </Grid>

export default HistoricalStats
