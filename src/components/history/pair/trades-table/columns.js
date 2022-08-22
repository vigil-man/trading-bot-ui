import { getFormattedTimestamp } from '../../../../utils/time-utils'
import _ from 'lodash'

export const columns = [
  {
    Header: '#',
    accessor: (row, i) => i + 1
  },
  {
    Header: 'Timestamp',
    accessor: row => getFormattedTimestamp(row.timestamp)
  },
  {
    Header: 'Side',
    accessor: 'side'
  },
  {
    Header: 'Size',
    accessor: row => _.round(row.orderSize, 8)
  },
  {
    Header: 'Price',
    accessor: 'price'
  },
  {
    Header: 'P&L Delta',
    accessor: row => _.round(row.pNlDelta, 2)
  },
  {
    Header: 'P&L',
    accessor: row => _.round(row.pNl, 2)
  }
]
