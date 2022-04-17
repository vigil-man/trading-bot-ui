import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { useSelector } from 'react-redux'
import { selectTradingPairs } from '../redux/trading-history/trading-history.selectors'
import { selectSimulationPairs } from '../redux/simulation/simulation.selectors'
import { Container, Header } from 'semantic-ui-react'

const EquityGraphs = () => {
  const tradingPairs = useSelector(selectTradingPairs)
  const simulationPairs = useSelector(selectSimulationPairs)

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
