import { useMemo } from 'react'
import SortableTable from '../../common/SortableTable'
import { columns } from './columns'
import { Dimmer, DimmerDimmable, Loader } from 'semantic-ui-react'
import { Endpoint } from '../../../constant'
import { useStatsMutation } from '../../../redux/api/historical-data.api'
import { useHistory } from 'react-router-dom'
import { useTradingHistoryMutation } from '../../../redux/api/trading-history.api'

const TradingPairsStatsTable = () => {
  const history = useHistory()
  const [, { tradingPairs }] = useTradingHistoryMutation({
    selectFromResult: ({ data }) => ({
      tradingPairs: data?.tradingPairs ?? []
    }),
    fixedCacheKey: Endpoint.HISTORY
  })
  const [, { data: pairsStats = [], isLoading }] = useStatsMutation({ fixedCacheKey: Endpoint.STATS })
  const data = useMemo(
    () => pairsStats.map(
      pairStats => (
        {
          symbol: pairStats.symbol,
          amplitude: pairStats.amplitude
        }
      )
    ),
    [pairsStats]
  ) || []

  const getSortType = column =>
    column.id === 'amplitude'
      ? 'basic'
      : 'alphanumeric'

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

export default TradingPairsStatsTable
