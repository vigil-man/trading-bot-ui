import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import SortableTable from '../../SortableTable'
import { columns } from './columns'
import { selectActivityPairs, selectActivityStatus } from '../../../redux/trading-activity/trading-activity.selectors'
import { Dimmer, DimmerDimmable, Loader } from 'semantic-ui-react'
import { RequestStatus } from '../../../redux/request.statuses'
import { selectTradingPairs } from '../../../redux/trading-history/trading-history.selectors'

const TradingPairsActivityTable = () => {
  const history = useHistory()
  const activityPairs = useSelector(selectActivityPairs)
  const activityStatus = useSelector(selectActivityStatus)
  const tradingPairs = useSelector(selectTradingPairs)

  const data = useMemo(
    () => activityPairs?.map(
      activity => (
        {
          symbol: activity.symbol,
          minutesDeltaFromLastUpdate: activity.minutesDeltaFromLastUpdate,
          bought: String(activity.bought),
          active: String(activity.active)
        }
      )
    ),
    [activityPairs]
  ) || []

  const getSortType = column => 'alphanumeric'

  const onRowClick = row => history.push({
    pathname: `/history/${row.original.symbol}`,
    state: tradingPairs[row.original.symbol]
  })

  return (
    <DimmerDimmable blurring dimmed={activityStatus === RequestStatus.LOADING}>
      <Dimmer active={activityStatus === RequestStatus.LOADING} inverted>
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

export default TradingPairsActivityTable
