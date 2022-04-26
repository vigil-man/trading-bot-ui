import TradingPairHistoryGraph from './graph/TradingPairHistoryGraph'
import { Grid, GridColumn, GridRow, Header } from 'semantic-ui-react'
import TradesSummary from './TradesSummary'
import TradesTable from './trades-table/TradesTable'
import { useParams } from 'react-router-dom'
import TradingPairHistoryActionPanel from './TradingPairHistoryActionPanel'
import { useCandlesMutation } from '../../../redux/api/historical-data.api'
import { useStrategyRecordsMutation } from '../../../redux/api/trading-cache.api'
import { Endpoint } from '../../../constant'

const TradingPairHistoryContainer = () => {
  const { symbol } = useParams()
  const [getCandles, { data: candlesData = [], isLoading: isCandlesLoading }] =
    useCandlesMutation({ fixedCacheKey: Endpoint.CANDLES })
  const [getStrategyRecords, { data: strategyRecordsData = [], isLoading: isStrategyRecordsLoading }] =
    useStrategyRecordsMutation({ fixedCacheKey: Endpoint.STRATEGY_RECORDS })
  document.title = symbol
  return (
    <Grid centered>
      <GridRow verticalAlign='middle'>
        <GridColumn width={2}>
          <GridRow>
            <Header textAlign='center'>
              {symbol}
            </Header>
          </GridRow>
        </GridColumn>
        <GridColumn width={10}>
          <TradingPairHistoryActionPanel
            symbol={symbol}
            getCandles={getCandles}
            getStrategyRecords={getStrategyRecords}
            isLoading={isCandlesLoading || isStrategyRecordsLoading}
          />
        </GridColumn>
        <GridColumn width={3}>
          <TradesSummary />
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn width={15}>
          <TradingPairHistoryGraph
            candles={candlesData}
            strategyRecords={strategyRecordsData}
          />
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
