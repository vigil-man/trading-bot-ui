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
    Header: 'Last update',
    accessor: row => getFormattedDuration(row.minutesDeltaFromLastUpdate)
  },
  {
    Header: 'Position state',
    accessor: 'positionState'
  },
  {
    Header: 'Active',
    accessor: 'active'
  }
]
