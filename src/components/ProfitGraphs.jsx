import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Container, Header } from 'semantic-ui-react'
import { useSimulationHistoryMutation, useTradingHistoryMutation } from '../redux/api/trading-history.api'
import { Endpoint } from '../constant'
import { getFormattedTimestamp } from '../utils/time-utils'

const ProfitGraphs = () => {
  const [, { simulationHistory }] = useSimulationHistoryMutation({
    selectFromResult: ({ data }) => ({
      simulationHistory: data?.profitHistory ?? []
    }),
    fixedCacheKey: Endpoint.SIMULATION_HISTORY
  })
  const [, { realHistory }] = useTradingHistoryMutation({
    selectFromResult: ({ data }) => ({
      realHistory: data?.profitHistory ?? []
    }),
    fixedCacheKey: Endpoint.HISTORY
  })

  return (
    <Container textAlign='center' fluid>
      <Header attached='bottom'>Real profit</Header>
      <ResponsiveContainer width='95%' height={400}>
        <LineChart data={realHistory}>
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='timestamp' tickFormatter={timestamp => getFormattedTimestamp(timestamp)} />
          <YAxis />
          <Line dataKey='value' type='monotone' stroke='#d3be55' dot={null} />
        </LineChart>
      </ResponsiveContainer>
      <Header attached='bottom'>Simulation profit</Header>
      <ResponsiveContainer width='95%' height={400}>
        <LineChart data={simulationHistory}>
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='timestamp' tickFormatter={timestamp => getFormattedTimestamp(timestamp)} />
          <YAxis />
          <Line dataKey='value' type='monotone' stroke='#d3be55' dot={null} />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  )
}

export default ProfitGraphs
