import { getFormattedDate } from '../../../../utils/time-utils'

export const columns = [
  {
    Header: '#',
    accessor: (row, i) => i + 1
  },
  {
    Header: 'Buy time',
    accessor: row => getFormattedDate(row.buyCreationTimestamp)
  },
  {
    Header: 'Sell time',
    accessor: row => getFormattedDate(row.sellCreationTimestamp)
  },
  {
    Header: 'Buy price',
    accessor: 'buyPrice'
  },
  {
    Header: 'Sell price',
    accessor: 'sellPrice'
  },
  {
    Header: 'Price delta percent',
    accessor: 'priceDeltaPercent'
  },
  {
    Header: 'Profit',
    accessor: 'profit'
  }
]
