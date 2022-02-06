export const columns = [
  {
    Header: '#',
    accessor: (row, i) => i + 1
  },
  {
    Header: 'Symbol',
    accessor: 'symbol',
  },
  {
    Header: 'Total profit',
    accessor: 'totalProfit',
  },
  {
    Header: 'Trades count',
    accessor: 'tradesCount',
  },
  {
    Header: 'Cancelled orders',
    accessor: 'cancelledOrders',
  },
  {
    Header: 'Filled orders',
    accessor: 'filledOrders',
  },
  {
    Header: 'Filled to cancelled ratio',
    accessor: 'filledToCancelledRatio',
  },
]
