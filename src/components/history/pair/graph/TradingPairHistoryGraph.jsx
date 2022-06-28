import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import IndicatorRecordTooltip from './IndicatorRecordTooltip'
import { Dimmer, DimmerDimmable, Loader } from 'semantic-ui-react'
import { getFormattedTimestamp } from '../../../../utils/time-utils'
import ScoreDot from './ScoreDot'

const TradingPairHistoryGraph = ({ data, isLoading }) => {
  const firstOpenPrice = data.find(itemData => itemData.openPrice)?.openPrice
  const firstPriceLog = firstOpenPrice ? Math.log(firstOpenPrice) : 0
  const getPriceLogDelta = itemData =>
    itemData.openPrice ? Math.log(itemData.openPrice) - firstPriceLog : null
  const getTimestamp = itemData => itemData.beginTime || itemData.timestamp

  return (
    <DimmerDimmable>
      <Dimmer active={isLoading} inverted>
        <Loader size='massive' />
      </Dimmer>
      <ResponsiveContainer width='100%' height={400}>
        <LineChart>
          <Tooltip
            filterNull={false}
            content={<IndicatorRecordTooltip />}
            labelFormatter={isoTimestamp => getFormattedTimestamp(isoTimestamp)}
          />
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis
            dataKey={getTimestamp}
            tickFormatter={isoTimestamp => getFormattedTimestamp(isoTimestamp)}
          />
          <YAxis />
          <Line
            data={data}
            dataKey={getPriceLogDelta}
            type='monotone'
            stroke='#d3be55'
            connectNulls
            dot={<ScoreDot />}
          />
        </LineChart>
      </ResponsiveContainer>
    </DimmerDimmable>
  )
}

export default TradingPairHistoryGraph
