import { Button } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { selectFromTime, selectToTime } from '../../../redux/date-picker/date-picker.selectors'
import { getEpochMilli } from '../../../time-utils'
import { useTradingHistoryMutation } from '../../../redux/api/trading-history.api'
import { Endpoint } from '../../../constant'

const GetTradingHistoryButton = () => {
  const fromTime = useSelector(selectFromTime)
  const toTime = useSelector(selectToTime)
  const [getHistory, { isLoading }] = useTradingHistoryMutation({ fixedCacheKey: Endpoint.HISTORY })

  return (
    <Button
      primary
      loading={isLoading}
      onClick={() => getHistory({
        fromTimestamp: getEpochMilli(fromTime),
        toTimestamp: toTime ? getEpochMilli(toTime) : moment.now()
      })}
    >
      Get History
    </Button>
  )
}

export default GetTradingHistoryButton
