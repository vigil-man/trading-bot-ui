import { Table, TableBody, TableCell, TableRow } from 'semantic-ui-react'
import { useLocation } from 'react-router-dom'

const TradesSummary = () => {
  const { state } = useLocation()
  return (
    <Table celled>
      <TableBody>
        <TableRow>
          <TableCell>Total Profit</TableCell>
          <TableCell>{state?.totalProfit || 0}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Trades count</TableCell>
          <TableCell>{state?.tradesCount || 0}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default TradesSummary
