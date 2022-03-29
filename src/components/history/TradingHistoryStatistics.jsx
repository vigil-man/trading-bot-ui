import { Dimmer, DimmerDimmable, Grid, GridColumn, GridRow, Statistic, StatisticGroup } from 'semantic-ui-react'
import { RequestStatus } from '../../redux/request.statuses'

const TradingHistoryStatistics = ({ history, status }) => (
  <DimmerDimmable blurring dimmed={status === RequestStatus.LOADING}>
    <Dimmer active={status === RequestStatus.LOADING} inverted />
    <Grid centered>
      <GridRow>
        <GridColumn width={7}>
          <StatisticGroup size='mini'>
            <Statistic>
              <Statistic.Value>$ {history.totalProfit}</Statistic.Value>
              <Statistic.Label>Total profit</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>$ {history.negativeTradesProfit}</Statistic.Value>
              <Statistic.Label>Negative orders profit</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>$ {history.positiveTradesProfit}</Statistic.Value>
              <Statistic.Label>Positive orders profit</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>$ {history.totalCommission}</Statistic.Value>
              <Statistic.Label>Total commission</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>$ {history.avgProfit}</Statistic.Value>
              <Statistic.Label>Avg profit per trade</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>% {history.avgPriceDeltaPercent}</Statistic.Value>
              <Statistic.Label>Avg delta per trade</Statistic.Label>
            </Statistic>
          </StatisticGroup>
        </GridColumn>
        <GridColumn width={7}>
          <StatisticGroup size='mini'>
            <Statistic>
              <Statistic.Value>{history.notFilledOrdersCount}</Statistic.Value>
              <Statistic.Label>Not filled orders</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>{history.filledOrdersCount}</Statistic.Value>
              <Statistic.Label>Filled orders</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>{history.semiFilledOrdersCount}</Statistic.Value>
              <Statistic.Label>Semi-filled orders</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>{history.positiveTradesCount}</Statistic.Value>
              <Statistic.Label>Positive trades</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>{history.negativeTradesCount}</Statistic.Value>
              <Statistic.Label>Negative trades</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>{history.zeroTradesCount}</Statistic.Value>
              <Statistic.Label>Zero trades</Statistic.Label>
            </Statistic>
          </StatisticGroup>
        </GridColumn>
      </GridRow>
    </Grid>
  </DimmerDimmable>
)

export default TradingHistoryStatistics
