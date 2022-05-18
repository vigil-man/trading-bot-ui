import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import IndicatorRecordTooltip from './IndicatorRecordTooltip'
import { Dimmer, DimmerDimmable, Loader } from 'semantic-ui-react'
import { getFormattedDate } from '../../../../utils/time-utils'
import ScoreDot from './ScoreDot'

const TradingPairHistoryGraph = ({ data, isLoading }) => {
  const firstClosePrice = data.find(itemData => itemData.closePrice)?.closePrice
  const firstPriceLog = firstClosePrice ? Math.log(firstClosePrice) : 0
  const getPriceLogDelta = itemData =>
    itemData.closePrice ? Math.log(itemData.closePrice) - firstPriceLog : null
  const getTimestamp = itemData => itemData.closeTimestamp || itemData.timestamp

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
            labelFormatter={epochMilli => getFormattedDate(epochMilli)}
          />
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis
            dataKey={getTimestamp}
            tickFormatter={timestamp => getFormattedDate(timestamp)}
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
