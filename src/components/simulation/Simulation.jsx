import SimulationActionPanel from './SimulationActionPanel'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import TradingHistoryStatistics from '../history/TradingHistoryStatistics'
import TradingPairsHistoryTable from '../history/pairs-table/TradingPairsHistoryTable'
import { useSelector } from 'react-redux'
import { selectSimulation, selectSimulationStatus } from '../../redux/simulation/simulation.selectors'

const Simulation = () => {
  const simulation = useSelector(selectSimulation)
  const simulationStatus = useSelector(selectSimulationStatus)
  return (
    <Grid centered>
      <GridRow>
        <GridColumn>
          <SimulationActionPanel />
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn>
          <TradingHistoryStatistics history={simulation} status={simulationStatus} />
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn width={15}>
          <TradingPairsHistoryTable tradingPairs={simulation.tradingPairs} status={simulationStatus} />
        </GridColumn>
      </GridRow>
    </Grid>
  )
}

export default Simulation
