import TradingPairHistoryGraph from './graph/TradingPairHistoryGraph'
import { Grid, GridColumn, GridRow, Header } from 'semantic-ui-react'
import TradesSummary from './TradesSummary'
import TradesTable from './trades-table/TradesTable'
import { useParams } from 'react-router-dom'
import TradingPairHistoryActionPanel from './TradingPairHistoryActionPanel'

const TradingPairHistoryContainer = () => {
  const { symbol } = useParams()
  document.title = symbol
  return (
    <Grid centered>
      <GridRow verticalAlign='middle'>
        <GridColumn width={3}>
          <GridRow>
            <Header textAlign='center'>
              {symbol}
            </Header>
          </GridRow>
        </GridColumn>
        <GridColumn width={6}>
          <TradingPairHistoryActionPanel />
        </GridColumn>
        <GridColumn width={3}>
          <TradesSummary />
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn width={15}>
          <TradingPairHistoryGraph />
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn width={15}>
          <TradesTable />
        </GridColumn>
      </GridRow>
    </Grid>
  )
}

export default TradingPairHistoryContainer
