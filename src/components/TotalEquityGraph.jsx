import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { useSelector } from 'react-redux'
import { selectTradingPairs } from '../redux/trading-history/trading-history.selectors'
import moment from 'moment'
import { Constants } from '../constants'

const TotalEquityGraph = () => {

  const tradingPairs = useSelector(selectTradingPairs)

  const profitDataTimeComparator = (first, second) => {
    return moment(first.sellTime, Constants.dateTimeFormat).valueOf()
      - moment(second.sellTime, Constants.dateTimeFormat).valueOf()
  }

  const profitCumulativeSum = (profitDataSummed => currentProfitData => ({
    sellTime: currentProfitData.sellTime,
    profit: profitDataSummed.profit += currentProfitData.profit
  }))({ sellTime: 0, profit: 0 })

  const getProfitDataArray = ([, data]) => (
    data.trades
      .filter(trade => trade.sellCreationTimestamp !== null)
      .map(trade => (
        {
          sellTime: trade.sellCreationTimestamp,
          profit: trade.profit
        }
      ))
  )

  const equityGraphData = (
    Object.entries(tradingPairs)
      .flatMap(getProfitDataArray)
      .sort(profitDataTimeComparator)
      .map(profitCumulativeSum)
  )

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={equityGraphData}>
        <Tooltip/>
        <Legend/>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="sellTime"/>
        <YAxis/>
        <Line dataKey="profit" type="monotone" stroke={'#d3be55'} dot={null}/>
      </LineChart>
    </ResponsiveContainer>
  )
}

export default TotalEquityGraph