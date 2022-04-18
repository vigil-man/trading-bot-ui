import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import SortableTable from '../../SortableTable'
import { columns } from './columns'
import { selectTradingStatePairs, selectTradingStateStatus } from '../../../redux/trading-state/trading-state.selectors'
import { Dimmer, DimmerDimmable, Loader } from 'semantic-ui-react'
import { RequestStatus } from '../../../redux/request.statuses'
import { useTradingHistoryMutation } from '../../../redux/api/trading-history.api'
import { Endpoint } from '../../../constant'

const TradingPairsStateTable = () => {
  const history = useHistory()
  const tradingStatePairs = useSelector(selectTradingStatePairs)
  const tradingStateStatus = useSelector(selectTradingStateStatus)
  const [, { data: tradingPairs = {} }] =
    useTradingHistoryMutation({ fixedCacheKey: Endpoint.HISTORY })

  const data = useMemo(
    () => tradingStatePairs?.map(
      tradingPairState => (
        {
          symbol: tradingPairState.symbol,
          minutesDeltaFromLastUpdate: tradingPairState.minutesDeltaFromLastUpdate,
          bought: String(tradingPairState.bought),
          active: String(tradingPairState.active)
        }
      )
    ),
    [tradingStatePairs]
  ) || []

  const getSortType = () => 'alphanumeric'

  const onRowClick = row => history.push({
    pathname: `/history/${row.original.symbol}`,
    state: tradingPairs[row.original.symbol]
  })

  return (
    <DimmerDimmable blurring dimmed={tradingStateStatus === RequestStatus.LOADING}>
      <Dimmer active={tradingStateStatus === RequestStatus.LOADING} inverted>
        <Loader size='massive' />
      </Dimmer>
      <SortableTable
        data={data}
        columns={columns}
        getSortType={getSortType}
        selectable
        onRowClick={onRowClick}
      />
    </DimmerDimmable>
  )
}

export default TradingPairsStateTable
