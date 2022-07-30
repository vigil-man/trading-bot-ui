import SimulationActionPanel from './SimulationActionPanel'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import TradingHistoryStatistics from '../history/TradingHistoryStatistics'
import TradingPairsHistoryTable from '../history/pairs-table/TradingPairsHistoryTable'
import { DefaultTradingHistoryResponse, Endpoint } from '../../constant'
import { useSimulationHistoryMutation } from '../../redux/api/trading-history.api'

const Simulation = () => {
  const [, { data = DefaultTradingHistoryResponse, isLoading }] = useSimulationHistoryMutation({ fixedCacheKey: Endpoint.SIMULATION_HISTORY })
  return (
    <Grid centered>
      <GridRow>
        <GridColumn>
          <SimulationActionPanel />
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn>
          <TradingHistoryStatistics summary={data} isLoading={isLoading} />
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn width={15}>
          <TradingPairsHistoryTable tradingPairs={data.symbolPositions} isLoading={isLoading} />
        </GridColumn>
      </GridRow>
    </Grid>
  )
}

export default Simulation
