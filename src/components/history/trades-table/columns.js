export const columns = [
  {
    Header: '#',
    accessor: (row, i) => i + 1
  },
  {
    Header: 'Buy time',
    accessor: 'buyCreationTimestamp',
  },
  {
    Header: 'Sell time',
    accessor: 'sellCreationTimestamp',
  },
  {
    Header: 'Buy price',
    accessor: 'buyPrice',
  },
  {
    Header: 'Sell price',
    accessor: 'sellPrice',
  },
  {
    Header: 'Price delta percent',
    accessor: 'priceDeltaPercent',
  },
  {
    Header: 'Profit',
    accessor: 'profit',
  }
]