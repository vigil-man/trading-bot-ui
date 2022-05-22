import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Container, Header } from 'semantic-ui-react'
import { useTradingHistoryMutation } from '../redux/api/trading-history.api'
import { Endpoint } from '../constant'
import { getFormattedTimestamp } from '../utils/time-utils'
import { useSimulateMutation } from '../redux/api/simulation.api'

const ProfitGraphs = () => {
  const [, { simulationPairs }] = useSimulateMutation({
    selectFromResult: ({ data }) => ({
      simulationPairs: data?.tradingPairs ?? []
    }),
    fixedCacheKey: Endpoint.SIMULATION
  })
  const [, { tradingPairs }] = useTradingHistoryMutation({
    selectFromResult: ({ data }) => ({
      tradingPairs: data?.tradingPairs ?? []
    }),
    fixedCacheKey: Endpoint.HISTORY
  })

  const profitDataTimeComparator = (first, second) => first.sellTime - second.sellTime

  // eslint-disable-next-line no-return-assign
  const profitCumulativeSum = (profitDataSummed => currentProfitData => ({
    sellTime: getFormattedTimestamp(currentProfitData.sellTime),
    profit: profitDataSummed.profit += currentProfitData.profit
  }))({ sellTime: 0, profit: 0 })

  const getProfitDataArray = ([, data]) =>
    data.trades
      .filter(trade => trade.sellCreationTimestamp !== 0)
      .map(trade => (
        {
          sellTime: trade.sellCreationTimestamp,
          profit: trade.profit
        }
      ))

  const profitGraphData = pairs => (
    Object.entries(pairs)
      .flatMap(getProfitDataArray)
      .sort(profitDataTimeComparator)
      .map(profitCumulativeSum)
  )

  return (
    <Container textAlign='center' fluid>
      <Header attached='bottom'>Real equity</Header>
      <ResponsiveContainer width='100%' height={400}>
        <LineChart data={profitGraphData(tradingPairs)}>
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='sellTime' />
          <YAxis />
          <Line dataKey='profit' type='monotone' stroke='#d3be55' dot={null} />
        </LineChart>
      </ResponsiveContainer>
      <Header attached='bottom'>Simulation equity</Header>
      <ResponsiveContainer width='100%' height={400}>
        <LineChart data={profitGraphData(simulationPairs)}>
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='sellTime' />
          <YAxis />
          <Line dataKey='profit' type='monotone' stroke='#d3be55' dot={null} />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  )
}

export default ProfitGraphs
