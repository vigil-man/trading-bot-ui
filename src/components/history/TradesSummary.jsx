import { Table, TableBody, TableCell, TableRow } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectTradingPairs } from '../../redux/trading-history/trading-history.selectors'

const TradesSummary = () => {
  const { symbol } = useParams()
  const tradingPairs = useSelector(selectTradingPairs)
  const tradingPair = tradingPairs[symbol]
  return (
    <Table celled>
      <TableBody>
        <TableRow>
          <TableCell>Total Profit</TableCell>
          <TableCell>{tradingPair?.totalProfit || 0}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Trades count</TableCell>
          <TableCell>{tradingPair?.tradesCount || 0}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default TradesSummary