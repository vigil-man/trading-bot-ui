import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Container, Header } from 'semantic-ui-react'
import { useSimulationHistoryMutation, useTradingHistoryMutation } from '../redux/api/trading-history.api'
import { Endpoint } from '../constant'

const EquityGraphs = () => {
  const [, { simulationPairs }] =
    useSimulationHistoryMutation(
      {
        selectFromResult: ({ data }) => ({
          simulationPairs: data.tradingPairs
        }),
        fixedCacheKey: Endpoint.HISTORY_SIMULATION
      })
  const [, { data: tradingPairs }] = useTradingHistoryMutation({ fixedCacheKey: Endpoint.HISTORY })

  const profitDataTimeComparator = (first, second) => first.sellTime - second.sellTime

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

  const equityGraphData = (pairs) => (
    Object.entries(pairs)
      .flatMap(getProfitDataArray)
      .sort(profitDataTimeComparator)
      .map(profitCumulativeSum)
  )

  return (
    <Container textAlign='center' fluid>
      <Header attached='bottom'>Real equity</Header>
      <ResponsiveContainer width='100%' height={400}>
        <LineChart data={equityGraphData(tradingPairs)}>
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
        <LineChart data={equityGraphData(simulationPairs)}>
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

export default EquityGraphs