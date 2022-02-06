import { useSelector } from 'react-redux'
import {
  selectTradingHistoryStatus,
  selectTradingPairs
} from '../../../redux/trading-history/trading-history.selectors'
import { useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import SortableTable from '../../SortableTable'
import { columns } from './columns'
import { Dimmer, DimmerDimmable, Loader } from 'semantic-ui-react'
import { RequestStatus } from '../../../redux/request.statuses'

const TradingPairsHistoryTable = () => {
  const tradingPairs = useSelector(selectTradingPairs)
  const tradingPairsStatus = useSelector(selectTradingHistoryStatus)
  const history = useHistory()
  const data = useMemo(
    () => Object.entries(tradingPairs).map(
      ([symbol, data]) => (
        {
          symbol: symbol,
          totalProfit: data.totalProfit,
          tradesCount: data.tradesCount,
          cancelledOrders: data.cancelledOrders,
          filledOrders: data.filledOrders,
          filledToCancelledRatio: data.filledToCancelledRatio
        }
      )
    ),
    [tradingPairs]
  )

  const getSortType = column =>
    column.id === 'totalProfit' || column.id === 'filledToCancelledRatio'
      ? 'basic'
      : 'alphanumeric'

  const onRowClick = row => history.push(`/history/${row.original.symbol}`)

  return (
    <DimmerDimmable blurring dimmed={tradingPairsStatus === RequestStatus.LOADING}>
      <Dimmer active={tradingPairsStatus === RequestStatus.LOADING} inverted>
        <Loader size="massive"/>
      </Dimmer>
      <SortableTable data={data}
                     columns={columns}
                     getSortType={getSortType}
                     selectable={true}
                     onRowClick={onRowClick}/>
    </DimmerDimmable>
  )
}

export default TradingPairsHistoryTable