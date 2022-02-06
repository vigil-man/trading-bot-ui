import TradingPairHistoryGraph from './graph/TradingPairHistoryGraph'
import { Grid, GridColumn, GridRow, Header } from 'semantic-ui-react'
import DateRangePicker from '../DateRangePicker'
import TradesSummary from './TradesSummary'
import TradesTable from './trades-table/TradesTable'
import { useParams } from 'react-router-dom'
import GetGraphDataButton from './actions/GetGraphDataButton'

const TradingPairHistoryContainer = () => {
  const { symbol } = useParams()
  document.title = symbol
  return (
    <Grid centered>
      <GridRow verticalAlign={'middle'}>
        <GridColumn width={3}>
          <GridRow>
            <Header textAlign="center">
              {symbol}
            </Header>
          </GridRow>
        </GridColumn>
        <GridColumn width={6}>
          <Grid centered padded>
            <GridColumn width={6} verticalAlign={'middle'}>
              <GetGraphDataButton/>
            </GridColumn>
            <GridColumn width={10}>
              <DateRangePicker/>
            </GridColumn>
          </Grid>
        </GridColumn>
        <GridColumn width={3}>
          <TradesSummary/>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn width={15}>
          <TradingPairHistoryGraph/>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn width={15}>
          <TradesTable/>
        </GridColumn>
      </GridRow>
    </Grid>
  )
}

export default TradingPairHistoryContainer