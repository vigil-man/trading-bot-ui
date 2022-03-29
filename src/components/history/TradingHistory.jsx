import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import TradingPairsHistoryTable from './pairs-table/TradingPairsHistoryTable'
import TradingHistoryStatistics from './TradingHistoryStatistics'
import TradingHistoryActionPanel from './TradingHistoryActionPanel'
import { useSelector } from 'react-redux'
import { selectTradingHistory, selectTradingHistoryStatus } from '../../redux/trading-history/trading-history.selectors'

const TradingHistory = () => {
  const tradingHistory = useSelector(selectTradingHistory)
  const tradingHistoryStatus = useSelector(selectTradingHistoryStatus)
  return (
    <Grid centered>
      <GridRow>
        <GridColumn>
          <TradingHistoryActionPanel />
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn>
          <TradingHistoryStatistics history={tradingHistory} status={tradingHistoryStatus} />
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn width={15}>
          <TradingPairsHistoryTable tradingPairs={tradingHistory.tradingPairs} status={tradingHistoryStatus} />
        </GridColumn>
      </GridRow>
    </Grid>
  )
}

export default TradingHistory
