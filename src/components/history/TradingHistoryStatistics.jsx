import { Dimmer, DimmerDimmable, Grid, GridColumn, StatisticGroup } from 'semantic-ui-react'

const TradingHistoryStatistics = ({ summary, isLoading }) => {
  const getStatistic = (value, label) => (
    {
      value: value,
      label: label
    }
  )

  const items = [
    getStatistic(summary.totalProfit.toFixed(2), 'Total profit $'),
    getStatistic(summary.maxDrawdown.toFixed(2), 'Max profit drawdown $'),
    getStatistic(summary.accountBalanceHistory.maxDrawdown.toFixed(2), 'Max equity drawdown $'),
    getStatistic(summary.accountBalanceHistory.maxDrawdownPercent.toFixed(2), 'Max equity drawdown percent'),
    getStatistic(summary.sharpeRatio.toFixed(2), 'Sharpe ratio'),
    getStatistic(summary.totalCommission.toFixed(2), 'Total commission'),
    getStatistic(summary.ordersCount, 'Orders')
  ]

  return (
    <DimmerDimmable blurring dimmed={isLoading}>
      <Dimmer active={isLoading} inverted />
      <Grid centered padded>
        <GridColumn width={15}>
          <StatisticGroup size='mini' items={items} />
        </GridColumn>
      </Grid>
    </DimmerDimmable>
  )
}

export default TradingHistoryStatistics
