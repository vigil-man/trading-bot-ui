import { Dimmer, DimmerDimmable, Grid, GridColumn, StatisticGroup } from 'semantic-ui-react'

const TradingHistoryStatistics = ({ summary, isLoading }) => {
  const getStatistic = (value, label, round = true) => (
    {
      key: label,
      value: round ? value?.toFixed(2) : value,
      label: label
    }
  )

  const items = [
    getStatistic(summary.totalProfit, 'Total profit $'),
    getStatistic(summary.maxDrawdown, 'Max profit drawdown $'),
    getStatistic(summary.accountBalanceHistory.collateral, 'Collateral $'),
    getStatistic(summary.accountBalanceHistory.maxDrawdown, 'Max equity drawdown $'),
    getStatistic(summary.accountBalanceHistory.maxDrawdownPercent, 'Max equity drawdown percent'),
    getStatistic(summary.sharpeRatio, 'Sharpe ratio'),
    getStatistic(summary.totalCommission, 'Total commission'),
    getStatistic(summary.ordersCount, 'Orders', false)
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
