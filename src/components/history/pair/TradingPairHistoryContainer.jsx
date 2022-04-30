import TradingPairHistoryGraph from './graph/TradingPairHistoryGraph'
import { Grid, GridColumn, GridRow, Header } from 'semantic-ui-react'
import TradesSummary from './TradesSummary'
import TradesTable from './trades-table/TradesTable'
import { useParams } from 'react-router-dom'
import TradingPairHistoryActionPanel from './TradingPairHistoryActionPanel'
import { useCandlesMutation } from '../../../redux/api/historical-data.api'
import { useStrategyRecordsMutation } from '../../../redux/api/trading-cache.api'
import { Endpoint } from '../../../constant'
import { mergeSortedArrays } from '../../../utils/array-utils/array-utils'
import { useMemo } from 'react'

const TradingPairHistoryContainer = () => {
  const { symbol } = useParams()
  document.title = symbol
  const [, { data: candlesData = [], isLoading: isCandlesLoading }] =
    useCandlesMutation({ fixedCacheKey: Endpoint.CANDLES })
  const [, { data: strategyRecordsData = [], isLoading: isStrategyRecordsLoading }] =
    useStrategyRecordsMutation({ fixedCacheKey: Endpoint.STRATEGY_RECORDS })
  const mergedData = useMemo(
    () => mergeSortedArrays(candlesData, strategyRecordsData, 'closeTimestamp', 'timestamp'),
    [candlesData, strategyRecordsData]
  )

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
        <GridColumn width={7}>
          <TradingPairHistoryActionPanel
            symbol={symbol}
          />
        </GridColumn>
        <GridColumn width={3}>
          <TradesSummary />
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn width={15}>
          <TradingPairHistoryGraph
            data={mergedData}
            isLoading={isCandlesLoading || isStrategyRecordsLoading}
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
