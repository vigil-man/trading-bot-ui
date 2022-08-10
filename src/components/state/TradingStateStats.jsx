import { Dimmer, DimmerDimmable, Statistic, StatisticGroup } from 'semantic-ui-react'
import { useTradingStateMutation } from '../../redux/api/trading-state.api'
import { Endpoint } from '../../constant'
import { getFormattedTimestamp } from '../../utils/time-utils'

const TradingStateStats = () => {
  const [, { data = {}, isLoading }] = useTradingStateMutation({ fixedCacheKey: Endpoint.STATE })

  return (
    <DimmerDimmable blurring dimmed={isLoading}>
      <Dimmer active={isLoading} inverted />
      <StatisticGroup size='mini'>
        <Statistic>
          <Statistic.Value>{getFormattedTimestamp(data.timestamp)}</Statistic.Value>
          <Statistic.Label>Last update</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>{data.shortPositionsCount}</Statistic.Value>
          <Statistic.Label>Short positions</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>{data.longPositionsCount}</Statistic.Value>
          <Statistic.Label>Long positions</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>{data.activePairsCount}</Statistic.Value>
          <Statistic.Label>Active pairs</Statistic.Label>
        </Statistic>
      </StatisticGroup>
    </DimmerDimmable>
  )
}

export default TradingStateStats
