import { useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'
import moment from 'moment'
import { Endpoint } from '../../../constant'
import { selectFromTime, selectToTime } from '../../../redux/date-picker/date-picker.selectors'
import { useParams } from 'react-router-dom'
import { getEpochMilli } from '../../../time-utils'
import { useCandlesMutation } from '../../../redux/api/historical-data.api'

const GetGraphDataButton = () => {
  const fromTime = useSelector(selectFromTime)
  const toTime = useSelector(selectToTime)
  const { symbol } = useParams()
  const [getCandles] = useCandlesMutation({ fixedCacheKey: Endpoint.CANDLES })

  return (
    <Button
      primary onClick={() => getCandles({
        symbol: symbol,
        fromTimestamp: getEpochMilli(fromTime),
        toTimestamp: toTime ? getEpochMilli(toTime) : moment.now(),
        intervalSeconds: 60 * 60
      })}
    >
      Get data
    </Button>
  )
}

export default GetGraphDataButton
