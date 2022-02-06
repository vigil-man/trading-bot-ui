import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import TradingPairsActivityTable from './pairs-table/TradingPairsActivityTable'
import TradingActivityActionPanel from './TradingActivityActionPanel'

const TradingActivity = () => {

  return (
    <Grid centered>
      <GridRow>
        <TradingActivityActionPanel/>
      </GridRow>
      <GridRow verticalAlign="middle">
        <GridColumn width={15}>
          <TradingPairsActivityTable/>
        </GridColumn>
      </GridRow>
    </Grid>
  )
}

export default TradingActivity