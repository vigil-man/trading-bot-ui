import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentGraphData, selectGraphDataGetStatus } from '../../../redux/graph/graph.selectors'
import ScoreDot from './ScoreDot'
import IndicatorRecordTooltip from './IndicatorRecordTooltip'
import { useEffect } from 'react'
import { clearGraphData } from '../../../redux/graph/graph.slice'
import { Dimmer, DimmerDimmable, Loader } from 'semantic-ui-react'
import { RequestStatus } from '../../../redux/request.statuses'

const TradingPairHistoryGraph = () => {

  const graphData = useSelector(selectCurrentGraphData)
  const graphStatus = useSelector(selectGraphDataGetStatus)
  const dispatch = useDispatch()

  useEffect(() => () => dispatch(clearGraphData()), [dispatch])

  return (
    <DimmerDimmable>
      <Dimmer active={graphStatus === RequestStatus.LOADING} inverted>
        <Loader size="massive"/>
      </Dimmer>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={graphData}>
          <Tooltip content={<IndicatorRecordTooltip/>}/>
          <Legend/>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="timestamp"/>
          <YAxis/>
          <Line dataKey="priceLogDelta" type="monotone" stroke={'#d3be55'} dot={<ScoreDot/>}/>
        </LineChart>
      </ResponsiveContainer>
    </DimmerDimmable>
  )
}

export default TradingPairHistoryGraph