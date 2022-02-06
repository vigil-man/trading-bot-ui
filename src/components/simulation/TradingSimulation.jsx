import TradingSimulationActionPanel from './TradingSimulationActionPanel'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import TradingHistoryStatistics from '../history/TradingHistoryStatistics'
import TradingPairsHistoryTable from '../history/pairs-table/TradingPairsHistoryTable'

const TradingSimulation = () => {
  return (
    <Grid centered>
      <GridRow>
        <GridColumn>
          <TradingSimulationActionPanel/>
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

export default TradingSimulation