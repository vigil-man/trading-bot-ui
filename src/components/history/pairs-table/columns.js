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
    Header: 'Profit',
    accessor: row => _.round(row.profit, 2)
  },
  {
    Header: 'Orders count',
    accessor: 'ordersCount'
  }
]
