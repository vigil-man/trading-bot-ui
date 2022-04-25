import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import IndicatorRecordTooltip from './IndicatorRecordTooltip'
import { Dimmer, DimmerDimmable, Loader } from 'semantic-ui-react'
import { getFormattedDate } from '../../../../time-utils'
import { Endpoint } from '../../../../constant'
import { useCandlesMutation } from '../../../../redux/api/historical-data.api'

const TradingPairHistoryGraph = () => {
  const [, { data, isLoading }] = useCandlesMutation({ fixedCacheKey: Endpoint.CANDLES })

  return (
    <DimmerDimmable>
      <Dimmer active={isLoading} inverted>
        <Loader size='massive' />
      </Dimmer>
      <ResponsiveContainer width='100%' height={400}>
        <LineChart data={data}>
          <Tooltip
            content={<IndicatorRecordTooltip />}
            labelFormatter={epochMilli => getFormattedDate(epochMilli)}
          />
          <Legend />
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis
            dataKey='closeTimestamp'
            tickFormatter={closeTimestamp => getFormattedDate(closeTimestamp)}
          />
          <YAxis yAxisId='closePrice' />
          {/* <YAxis yAxisId='indicator' orientation='right' /> */}
          <Line
            connectNulls
            yAxisId='closePrice'
            dataKey='closePrice' type='monotone' stroke='#d3be55' dot={null}
          />
          {/* <Line */}
          {/*  connectNulls */}
          {/*  yAxisId='indicator' */}
          {/*  dataKey='value' type='monotone' stroke='#d3be55' dot={<ScoreDot />} */}
          {/* /> */}
        </LineChart>
      </ResponsiveContainer>
    </DimmerDimmable>
  )
}

export default TradingPairHistoryGraph
