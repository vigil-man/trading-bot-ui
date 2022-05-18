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
    Header: 'Last update minutes ago',
    accessor: 'minutesDeltaFromLastUpdate'
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
