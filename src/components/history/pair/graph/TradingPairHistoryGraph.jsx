import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import IndicatorRecordTooltip from './IndicatorRecordTooltip'
import { Dimmer, DimmerDimmable, Loader } from 'semantic-ui-react'
import { getFormattedDate } from '../../../../time-utils'
import ScoreDot from './ScoreDot'

const TradingPairHistoryGraph = ({ candles, strategyRecords, isLoading }) => {
  const firstClosePrice = candles[0]?.closePrice
  const firstValue = strategyRecords[0]?.value
  const firstPriceLog = firstClosePrice ? Math.log(firstClosePrice) : 0
  const firstValueLog = firstValue ? Math.log(firstValue) : 0
  const getPriceLogDelta = data => Math.log(data.closePrice) - firstPriceLog
  const getValueLogDelta = data => Math.log(data.value) - firstValueLog

  return (
    <DimmerDimmable>
      <Dimmer active={isLoading} inverted>
        <Loader size='massive' />
      </Dimmer>
      <ResponsiveContainer width='100%' height={400}>
        <LineChart>
          <Tooltip
            content={<IndicatorRecordTooltip />}
            labelFormatter={epochMilli => getFormattedDate(epochMilli)}
          />
          {/* <Legend /> */}
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis
            dataKey='closeTimestamp'
            tickFormatter={closeTimestamp => getFormattedDate(closeTimestamp)}
          />
          <YAxis yAxisId='closePrice' />
          <Line
            data={candles}
            yAxisId='closePrice'
            dataKey={getPriceLogDelta} type='monotone' stroke='#d3be55' dot={null}
          />
          <YAxis yAxisId='indicator' orientation='right' />
          <Line
            data={strategyRecords}
            yAxisId='indicator'
            dataKey={getValueLogDelta} type='monotone' stroke='#d3be55' dot={<ScoreDot />}
          />
        </LineChart>
      </ResponsiveContainer>
    </DimmerDimmable>
  )
}

export default TradingPairHistoryGraph
