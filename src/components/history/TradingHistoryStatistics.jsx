import { Dimmer, DimmerDimmable, Grid, GridColumn, Statistic, StatisticGroup } from 'semantic-ui-react'

const TradingHistoryStatistics = ({ history, isLoading }) => (
  <DimmerDimmable blurring dimmed={isLoading}>
    <Dimmer active={isLoading} inverted />
    <Grid centered padded>
      <GridColumn width={15}>
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
            <Statistic.Value>{history.sharpeRatio}</Statistic.Value>
            <Statistic.Label>Sharpe ratio</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>% {history.avgPriceDeltaPercent}</Statistic.Value>
            <Statistic.Label>Avg delta per trade</Statistic.Label>
          </Statistic>
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
    </Grid>
  </DimmerDimmable>
)

export default TradingHistoryStatistics
