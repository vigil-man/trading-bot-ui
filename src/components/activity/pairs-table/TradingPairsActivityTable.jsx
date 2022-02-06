import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import SortableTable from '../../SortableTable'
import { columns } from './columns'
import { selectActivityPairs, selectActivityStatus } from '../../../redux/trading-activity/trading-activity.selectors'
import { Dimmer, DimmerDimmable, Loader } from 'semantic-ui-react'
import { RequestStatus } from '../../../redux/request.statuses'

const TradingPairsActivityTable = () => {
  const history = useHistory()
  const activityPairs = useSelector(selectActivityPairs)
  const activityStatus = useSelector(selectActivityStatus)

  const data = useMemo(
    () => activityPairs?.map(
      activity => (
        {
          symbol: activity.symbol,
          minutesDeltaFromLastUpdate: activity.minutesDeltaFromLastUpdate,
          tradingActive: String(activity.tradingActive),
          bought: String(activity.bought),
          active: String(activity.active),
        }
      )
    ),
    [activityPairs]
  ) || []

  const getSortType = column => 'alphanumeric'

  const onRowClick = row => history.push(`/history/${row.original.symbol}`)

  return (
    <DimmerDimmable blurring dimmed={activityStatus === RequestStatus.LOADING}>
      <Dimmer active={activityStatus === RequestStatus.LOADING} inverted>
        <Loader size="massive"/>
      </Dimmer>
      <SortableTable data={data}
                     columns={columns}
                     getSortType={getSortType}
                     selectable={true}
                     onRowClick={onRowClick}/>
    </DimmerDimmable>
  )
}

export default TradingPairsActivityTable