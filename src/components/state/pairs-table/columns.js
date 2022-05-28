import { getFormattedDuration } from '../../../utils/time-utils'

export const columns = [
  {
    Header: '#',
    accessor: (row, i) => i + 1
  },
  {
    Header: 'Symbol',
    accessor: 'symbol'
  },
  {
    Header: 'Last update ago',
    accessor: row => getFormattedDuration(row.minutesDeltaFromLastUpdate)
  },
  {
    Header: 'Bought',
    accessor: 'bought'
  },
  {
    Header: 'Active',
    accessor: 'active'
  }
]
