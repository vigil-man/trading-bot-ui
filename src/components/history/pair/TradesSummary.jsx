import { Table, TableBody, TableCell, TableRow } from 'semantic-ui-react'
import { useLocation } from 'react-router-dom'

const TradesSummary = () => {
  const { state } = useLocation()
  return (
    <Table celled>
      <TableBody>
        <TableRow>
          <TableCell>Profit</TableCell>
          <TableCell>{state.profit?.toFixed(2) ?? 0}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Commission</TableCell>
          <TableCell>{state.commission?.toFixed(2) ?? 0}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Orders</TableCell>
          <TableCell>{state.positions?.length ?? 0}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default TradesSummary
