import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Container, Header } from 'semantic-ui-react'
import { useSimulationHistoryMutation } from '../redux/api/trading-history.api'
import { DefaultTradingHistoryResponse, Endpoint } from '../constant'
import { getFormattedTimestamp } from '../utils/time-utils'

const EquityGraph = () => {
  const [, { data = DefaultTradingHistoryResponse }] = useSimulationHistoryMutation({ fixedCacheKey: Endpoint.SIMULATION_HISTORY })

  return (
    <Container textAlign='center' fluid>
      <Header attached='bottom'>Equity</Header>
      <ResponsiveContainer width='95%' height={400}>
        <LineChart data={data.accountBalanceHistory.equityHistory}>
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

export default EquityGraph
