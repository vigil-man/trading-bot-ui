import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import TradingPairsStateTable from './pairs-table/TradingPairsStateTable'
import TradingStateActionPanel from './TradingStateActionPanel'

const TradingState = () => {
  return (
    <Grid centered>
      <GridRow>
        <TradingStateActionPanel />
      </GridRow>
      <GridRow verticalAlign='middle'>
        <GridColumn width={15}>
          <TradingPairsStateTable />
        </GridColumn>
      </GridRow>
    </Grid>
  )
}

export default TradingState
