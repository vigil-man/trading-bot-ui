import { Dimmer, DimmerDimmable, Grid, GridColumn, GridRow, Statistic, StatisticGroup } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import { selectTradingHistory, selectTradingHistoryStatus } from '../../redux/trading-history/trading-history.selectors'
import { RequestStatus } from '../../redux/request.statuses'

const TradingHistoryStatistics = () => {
  const tradingHistory = useSelector(selectTradingHistory)
  const tradingPairsStatus = useSelector(selectTradingHistoryStatus)
  return (
    <DimmerDimmable blurring dimmed={tradingPairsStatus === RequestStatus.LOADING}>
      <Dimmer active={tradingPairsStatus === RequestStatus.LOADING} inverted/>
      <Grid centered>
        <GridRow>
          <GridColumn width={7}>
            <StatisticGroup size="mini">
              <Statistic>
                <Statistic.Value>$ {tradingHistory.totalProfit}</Statistic.Value>
                <Statistic.Label>Total profit</Statistic.Label>
              </Statistic>
              <Statistic>
                <Statistic.Value>$ {tradingHistory.negativeTradesProfit}</Statistic.Value>
                <Statistic.Label>Negative orders profit</Statistic.Label>
              </Statistic>
              <Statistic>
                <Statistic.Value>$ {tradingHistory.positiveTradesProfit}</Statistic.Value>
                <Statistic.Label>Positive orders profit</Statistic.Label>
              </Statistic>
              <Statistic>
                <Statistic.Value>$ {tradingHistory.totalCommission}</Statistic.Value>
                <Statistic.Label>Total commission</Statistic.Label>
              </Statistic>
              <Statistic>
                <Statistic.Value>$ {tradingHistory.avgProfit}</Statistic.Value>
                <Statistic.Label>Avg profit per trade</Statistic.Label>
              </Statistic>
              <Statistic>
                <Statistic.Value>% {tradingHistory.avgPriceDeltaPercent}</Statistic.Value>
                <Statistic.Label>Avg delta per trade</Statistic.Label>
              </Statistic>
            </StatisticGroup>
          </GridColumn>
          <GridColumn width={7}>
            <StatisticGroup size="mini">
              <Statistic>
                <Statistic.Value>{tradingHistory.notFilledOrdersCount}</Statistic.Value>
                <Statistic.Label>Not filled orders</Statistic.Label>
              </Statistic>
              <Statistic>
                <Statistic.Value>{tradingHistory.filledOrdersCount}</Statistic.Value>
                <Statistic.Label>Filled orders</Statistic.Label>
              </Statistic>
              <Statistic>
                <Statistic.Value>{tradingHistory.semiFilledOrdersCount}</Statistic.Value>
                <Statistic.Label>Semi-filled orders</Statistic.Label>
              </Statistic>
              <Statistic>
                <Statistic.Value>{tradingHistory.positiveTradesCount}</Statistic.Value>
                <Statistic.Label>Positive trades</Statistic.Label>
              </Statistic>
              <Statistic>
                <Statistic.Value>{tradingHistory.negativeTradesCount}</Statistic.Value>
                <Statistic.Label>Negative trades</Statistic.Label>
              </Statistic>
              <Statistic>
                <Statistic.Value>{tradingHistory.zeroTradesCount}</Statistic.Value>
                <Statistic.Label>Zero trades</Statistic.Label>
              </Statistic>
            </StatisticGroup>
          </GridColumn>
        </GridRow>
      </Grid>
    </DimmerDimmable>
  )
}

export default TradingHistoryStatistics