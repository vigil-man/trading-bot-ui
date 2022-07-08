import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Container, Header } from 'semantic-ui-react'
import { useTradingHistoryMutation } from '../redux/api/trading-history.api'
import { Endpoint } from '../constant'
import { useSimulateMutation } from '../redux/api/simulation.api'
import { getFormattedTimestamp } from '../utils/time-utils'

const ProfitGraphs = () => {
  const [, { simulationHistory }] = useSimulateMutation({
    selectFromResult: ({ data }) => ({
      simulationHistory: data?.profitHistory ?? []
    }),
    fixedCacheKey: Endpoint.SIMULATION
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
