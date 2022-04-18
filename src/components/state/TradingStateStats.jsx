import { Dimmer, DimmerDimmable, Statistic, StatisticGroup } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import { RequestStatus } from '../../redux/request.statuses'
import { selectTradingStateStatus, selectTradingStateSummary } from '../../redux/trading-state/trading-state.selectors'

const TradingStateStats = () => {
  const tradingStateSummary = useSelector(selectTradingStateSummary)
  const tradingStateStatus = useSelector(selectTradingStateStatus)
  return (
    <DimmerDimmable blurring dimmed={tradingStateStatus === RequestStatus.LOADING}>
      <Dimmer active={tradingStateStatus === RequestStatus.LOADING} inverted />
      <StatisticGroup size='mini'>
        <Statistic>
          <Statistic.Value>{tradingStateSummary.timestamp}</Statistic.Value>
          <Statistic.Label>Last update</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>{tradingStateSummary.boughtPairsCount}</Statistic.Value>
          <Statistic.Label>Bought pairs</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>{tradingStateSummary.activePairsCount}</Statistic.Value>
          <Statistic.Label>Active pairs</Statistic.Label>
        </Statistic>
      </StatisticGroup>
    </DimmerDimmable>
  )
}

export default TradingStateStats
