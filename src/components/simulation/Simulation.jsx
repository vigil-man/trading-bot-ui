import SimulationActionPanel from './SimulationActionPanel'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import TradingHistoryStatistics from '../history/TradingHistoryStatistics'
import TradingPairsHistoryTable from '../history/pairs-table/TradingPairsHistoryTable'
import { useSimulationHistoryMutation } from '../../redux/api/trading-history.api'
import { DefaultTradingHistoryState, Endpoint } from '../../constant'

const Simulation = () => {
  const [, { data = DefaultTradingHistoryState, isLoading }] = useSimulationHistoryMutation({ fixedCacheKey: Endpoint.SIMULATION })
  return (
    <Grid centered>
      <GridRow>
        <GridColumn>
          <SimulationActionPanel />
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn>
          <TradingHistoryStatistics history={data} isLoading={isLoading} />
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn width={15}>
          <TradingPairsHistoryTable tradingPairs={data.tradingPairs} isLoading={isLoading} />
        </GridColumn>
      </GridRow>
    </Grid>
  )
}

export default Simulation
