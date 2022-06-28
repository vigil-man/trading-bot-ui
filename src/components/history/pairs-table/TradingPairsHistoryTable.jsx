import { useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import SortableTable from '../../common/SortableTable'
import { columns } from './columns'
import { Dimmer, DimmerDimmable, Loader } from 'semantic-ui-react'

const TradingPairsHistoryTable = ({ tradingPairs, isLoading }) => {
  const history = useHistory()
  const data = useMemo(
    () => Object.entries(tradingPairs).map(
      ([symbol, data]) => (
        {
          symbol: symbol,
          profit: data.profit,
          ordersCount: data.positions?.length
        }
      )
    ),
    [tradingPairs]
  )

  const getSortType = () => 'basic'

  const onRowClick = row => history.push({
    pathname: `/history/${row.original.symbol}`,
    state: tradingPairs[row.original.symbol]
  })

  return (
    <DimmerDimmable blurring dimmed={isLoading}>
      <Dimmer active={isLoading} inverted>
        <Loader size='massive' />
      </Dimmer>
      <SortableTable
        data={data}
        columns={columns}
        getSortType={getSortType}
        selectable
        onRowClick={onRowClick}
      />
    </DimmerDimmable>
  )
}

export default TradingPairsHistoryTable
