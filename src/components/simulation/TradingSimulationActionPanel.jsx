import { Grid, GridColumn } from 'semantic-ui-react'
import SymbolSelector from './actions/SymbolSelector'
import StartSimulationButton from './actions/StartSimulationButton'
import GetSimulationHistoryButton from './actions/GetSimulationHistoryButton'
import DateRangePicker from '../DateRangePicker'

const TradingSimulationActionPanel = () => {

  return (
    <Grid centered verticalAlign={'middle'}>
      <GridColumn width={7}>
        <SymbolSelector/>
      </GridColumn>
      <GridColumn width={6}>
        <Grid centered>
          <GridColumn width={4} verticalAlign={'middle'}>
            <StartSimulationButton/>
          </GridColumn>
          <GridColumn width={8}>
            <DateRangePicker/>
          </GridColumn>
          <GridColumn width={4} verticalAlign={'middle'}>
            <GetSimulationHistoryButton/>
          </GridColumn>
        </Grid>
      </GridColumn>
    </Grid>
  )
}

export default TradingSimulationActionPanel