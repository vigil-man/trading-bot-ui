import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import TradingPairsActivityTable from './pairs-table/TradingPairsActivityTable'
import TradingStateActionPanel from './TradingStateActionPanel'

const TradingState = () => {
  return (
    <Grid centered>
      <GridRow>
        <TradingStateActionPanel />
      </GridRow>
      <GridRow verticalAlign='middle'>
        <GridColumn width={15}>
          <TradingPairsActivityTable />
        </GridColumn>
      </GridRow>
    </Grid>
  )
}

export default TradingState
