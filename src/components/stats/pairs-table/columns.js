import _ from 'lodash'

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
    Header: 'Amplitude',
    accessor: 'amplitude'
  },
  {
    Header: 'Delta',
    accessor: 'delta'
  },
  {
    Header: 'Profit',
    accessor: row => _.round(row.profit, 2)
  }
]
