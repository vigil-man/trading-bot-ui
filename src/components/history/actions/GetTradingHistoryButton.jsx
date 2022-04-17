import { Button } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { selectBotUrl } from '../../../redux/config/config.selectors'
import { getTradingHistory } from '../../../redux/trading-history/trading-history.slice'
import moment from 'moment'
import { Endpoint } from '../../../constant'
import { selectFromTime, selectToTime } from '../../../redux/date-picker/date-picker.selectors'
import { RequestStatus } from '../../../redux/request.statuses'
import { selectTradingHistoryStatus } from '../../../redux/trading-history/trading-history.selectors'
import { getEpochMilli } from '../../../time-utils'

const GetTradingHistoryButton = () => {
  const botUrl = useSelector(selectBotUrl)
  const fromTime = useSelector(selectFromTime)
  const toTime = useSelector(selectToTime)
  const tradingPairsStatus = useSelector(selectTradingHistoryStatus)
  const dispatch = useDispatch()
  return (
    <Button
      primary
      loading={tradingPairsStatus === RequestStatus.LOADING}
      onClick={() => dispatch(getTradingHistory({
        url: `${botUrl}${process.env.REACT_APP_CORE_PORT}${Endpoint.HISTORY}`,
        fromTimestamp: getEpochMilli(fromTime),
        toTimestamp: toTime ? getEpochMilli(toTime) : moment.now()
      }))}
    >
      Get History
    </Button>
  )
}

export default GetTradingHistoryButton
