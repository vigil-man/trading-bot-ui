import { Dimmer, DimmerDimmable, Grid, GridColumn, Statistic, StatisticGroup } from 'semantic-ui-react'

const TradingHistoryStatistics = ({ summary, isLoading }) => (
  <DimmerDimmable blurring dimmed={isLoading}>
    <Dimmer active={isLoading} inverted />
    <Grid centered padded>
      <GridColumn width={15}>
        <StatisticGroup size='mini'>
          <Statistic>
            <Statistic.Value>$ {summary.totalProfit.toFixed(2)}</Statistic.Value>
            <Statistic.Label>Total profit</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>$ {summary.totalCommission.toFixed(2)}</Statistic.Value>
            <Statistic.Label>Total commission</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{summary.ordersCount}</Statistic.Value>
            <Statistic.Label>Orders</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>$ {summary.positiveTradesProfit}</Statistic.Value>
            <Statistic.Label>Positive orders profit</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{summary.sharpeRatio}</Statistic.Value>
            <Statistic.Label>Sharpe ratio</Statistic.Label>
          </Statistic>
        </StatisticGroup>
      </GridColumn>
    </Grid>
  </DimmerDimmable>
)

export default TradingHistoryStatistics
