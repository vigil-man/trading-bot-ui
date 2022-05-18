import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import TradingPairsHistoryTable from './pairs-table/TradingPairsHistoryTable'
import TradingHistoryStatistics from './TradingHistoryStatistics'
import TradingHistoryActionPanel from './TradingHistoryActionPanel'
import { DefaultTradingHistoryResponse, Endpoint } from '../../constant'
import { useTradingHistoryMutation } from '../../redux/api/trading-history.api'

const TradingHistory = () => {
  const [, { data = DefaultTradingHistoryResponse, isLoading }] =
    useTradingHistoryMutation({ fixedCacheKey: Endpoint.HISTORY })

  return (
    <Grid centered>
      <GridRow>
        <GridColumn>
          <TradingHistoryActionPanel />
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn>
          <TradingHistoryStatistics history={data} isLoading={isLoading} />
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn width={15}>
          <TradingPairsHistoryTable tradingPairs={data.tradingPairs} isLoading={isLoading} />
        </GridColumn>
      </GridRow>
    </Grid>
  )
}

export default TradingHistory
