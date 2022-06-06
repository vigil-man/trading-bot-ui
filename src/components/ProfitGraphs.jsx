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

  const profitDataTimeComparator = (first, second) =>
    first.sellTime.localeCompare(second.sellTime)

  const getProfitDataArray = ([, data]) =>
    data.trades
      .filter(trade => !!trade.sellCreationTimestamp)
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
      // eslint-disable-next-line no-return-assign
      .map((profitDataSummed => currentProfitData => ({
        sellTime: getFormattedTimestamp(currentProfitData.sellTime),
        profit: profitDataSummed.profit += currentProfitData.profit
      }))({ sellTime: 0, profit: 0 }))
  )

  return (
    <Container textAlign='center' fluid>
      <Header attached='bottom'>Real profit</Header>
      <ResponsiveContainer width='95%' height={400}>
        <LineChart data={profitGraphData(tradingPairs)}>
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='sellTime' />
          <YAxis />
          <Line dataKey='profit' type='monotone' stroke='#d3be55' dot={null} />
        </LineChart>
      </ResponsiveContainer>
      <Header attached='bottom'>Simulation profit</Header>
      <ResponsiveContainer width='95%' height={400}>
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
