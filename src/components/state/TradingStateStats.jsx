import { Dimmer, DimmerDimmable, Statistic, StatisticGroup } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import { RequestStatus } from '../../redux/request.statuses'
import { selectActivityStatus, selectActivitySummary } from '../../redux/trading-activity/trading-activity.selectors'

const TradingStateStats = () => {
  const activitySummary = useSelector(selectActivitySummary)
  const activitySummaryStatus = useSelector(selectActivityStatus)
  return (
    <DimmerDimmable blurring dimmed={activitySummaryStatus === RequestStatus.LOADING}>
      <Dimmer active={activitySummaryStatus === RequestStatus.LOADING} inverted />
      <StatisticGroup size='mini'>
        <Statistic>
          <Statistic.Value>{activitySummary.timestamp}</Statistic.Value>
          <Statistic.Label>Last update</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>{activitySummary.boughtPairsCount}</Statistic.Value>
          <Statistic.Label>Bought pairs</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>{activitySummary.activePairsCount}</Statistic.Value>
          <Statistic.Label>Active pairs</Statistic.Label>
        </Statistic>
      </StatisticGroup>
    </DimmerDimmable>
  )
}

export default TradingStateStats
