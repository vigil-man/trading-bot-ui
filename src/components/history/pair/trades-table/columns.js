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
    accessor: 'orderSize'
  },
  {
    Header: 'Price',
    accessor: 'price'
  },
  {
    Header: 'Total size',
    accessor: 'totalSize'
  },
  {
    Header: 'Value',
    accessor: row => _.round(row.value, 2)
  },
  {
    Header: 'P&L',
    accessor: row => _.round(row.pNl, 2)
  }
]
