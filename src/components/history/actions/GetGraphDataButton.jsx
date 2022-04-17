import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { selectBotUrl } from '../../../redux/config/config.selectors'
import { getGraphData } from '../../../redux/graph/graph.slice'
import moment from 'moment'
import { Endpoint } from '../../../constant'
import { selectFromTime, selectToTime } from '../../../redux/date-picker/date-picker.selectors'
import { useParams } from 'react-router-dom'
import { getEpochMilli } from '../../../time-utils'

const GetGraphDataButton = () => {
  const dispatch = useDispatch()
  const botUrl = useSelector(selectBotUrl)
  const fromTime = useSelector(selectFromTime)
  const toTime = useSelector(selectToTime)
  const { symbol } = useParams()

  return (
    <Button
      primary onClick={() => dispatch(getGraphData({
        url: `${botUrl}${process.env.REACT_APP_CORE_PORT}${Endpoint.GRAPH}/${symbol}`,
        from: getEpochMilli(fromTime),
        to: toTime ? getEpochMilli(toTime) : moment.now(),
        stepMinutes: 60
      }))}
    >
      Get data
    </Button>
  )
}

export default GetGraphDataButton
