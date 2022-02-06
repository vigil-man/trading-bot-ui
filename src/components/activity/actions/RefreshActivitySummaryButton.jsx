import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { selectBotPort } from '../../../redux/ports/ports.selectors'
import { fetchActivitySummary } from '../../../redux/trading-activity/trading-activity.slice'
import { RequestStatus } from '../../../redux/request.statuses'
import { selectActivityStatus } from '../../../redux/trading-activity/trading-activity.selectors'

const RefreshActivitySummaryButton = () => {
  const dispatch = useDispatch()
  const botPort = useSelector(selectBotPort)
  const activityStatus = useSelector(selectActivityStatus)

  return (
    <Button primary
            loading={activityStatus === RequestStatus.LOADING}
            onClick={() => dispatch(fetchActivitySummary(
              `${process.env.REACT_APP_BOT_HOST}:${botPort}${process.env.REACT_APP_ACTIVITY_GET_SUMMARY_ENDPOINT}`)
            )}>
      Refresh summary
    </Button>
  )
}

export default RefreshActivitySummaryButton