import { Grid, GridColumn } from 'semantic-ui-react'
import SymbolSelector from './actions/SymbolSelector'
import ExecuteSimulationButton from './actions/ExecuteSimulationButton'
import DateRangePicker from '../DateRangePicker'

const SimulationActionPanel = () => {
  return (
    <Grid centered verticalAlign='middle'>
      <GridColumn width={7}>
        <SymbolSelector />
      </GridColumn>
      <GridColumn width={9}>
        <Grid centered>
          <GridColumn width={4} verticalAlign='middle'>
            <ExecuteSimulationButton />
          </GridColumn>
          <GridColumn width={8}>
            <DateRangePicker />
          </GridColumn>
        </Grid>
      </GridColumn>
    </Grid>
  )
}

export default SimulationActionPanel
