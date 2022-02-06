import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { selectBotPort } from '../../../redux/ports/ports.selectors'
import { getGraphData } from '../../../redux/graph/graph.slice'
import moment from 'moment'
import { Constants } from '../../../constants'
import { selectFromTime, selectToTime } from '../../../redux/date-picker/date-picker.selectors'
import { useParams } from 'react-router-dom'

const GetGraphDataButton = () => {
  const dispatch = useDispatch()
  const botPort = useSelector(selectBotPort)
  const fromTime = useSelector(selectFromTime)
  const toTime = useSelector(selectToTime)
  const { symbol } = useParams()

  return (
    <Button primary onClick={() => dispatch(getGraphData({
      url: `${process.env.REACT_APP_BOT_HOST}:${botPort}${process.env.REACT_APP_GRAPH_ENDPOINT}/${symbol}`,
      from: moment(fromTime, Constants.dateTimeFormat).valueOf(),
      to: toTime ? moment(toTime, Constants.dateTimeFormat).valueOf() : moment.now()
    }))}>
      Get data
    </Button>
  )
}

export default GetGraphDataButton