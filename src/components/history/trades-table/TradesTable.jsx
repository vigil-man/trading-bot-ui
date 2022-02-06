import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectTradingPairs } from '../../../redux/trading-history/trading-history.selectors'
import { useMemo } from 'react'
import SortableTable from '../../SortableTable'
import { columns } from './columns'

const TradesTable = () => {
  const { symbol } = useParams()
  const tradingPairs = useSelector(selectTradingPairs)

  const data = useMemo(
    () => tradingPairs[symbol]?.trades || [],
    [symbol, tradingPairs]
  )

  const getSortType = column =>
    column.id === 'priceDeltaPercent' || column.id === 'profit'
      ? 'basic'
      : 'alphanumeric'

  return (
    <SortableTable data={data}
                   columns={columns}
                   getSortType={getSortType}/>
  )
}

export default TradesTable