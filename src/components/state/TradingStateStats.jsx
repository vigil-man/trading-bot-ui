import { Dimmer, DimmerDimmable, StatisticGroup } from 'semantic-ui-react'
import { useTradingStateMutation } from '../../redux/api/trading-state.api'
import { Endpoint } from '../../constant'
import { getFormattedTimestamp } from '../../utils/time-utils'

const TradingStateStats = () => {
  const [, { data = {}, isLoading }] = useTradingStateMutation({ fixedCacheKey: Endpoint.STATE })

  const getStatistic = (value, label) => (
    {
      key: label,
      value: value,
      label: label
    }
  )

  const items = [
    getStatistic(getFormattedTimestamp(data.timestamp), 'Last update'),
    getStatistic(`${data.marginFraction?.toFixed(2)} %`, 'Margin fraction'),
    getStatistic(data.shortPositionsCount, 'Short positions'),
    getStatistic(data.longPositionsCount, 'Long positions'),
    getStatistic(data.activePairsCount, 'Active pairs')
  ]

  return (
    <DimmerDimmable blurring dimmed={isLoading}>
      <Dimmer active={isLoading} inverted />
      <StatisticGroup size='mini' items={items} />
    </DimmerDimmable>
  )
}

export default TradingStateStats
