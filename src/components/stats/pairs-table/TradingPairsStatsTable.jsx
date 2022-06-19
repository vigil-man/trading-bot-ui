import { useMemo } from 'react'
import SortableTable from '../../common/SortableTable'
import { columns } from './columns'
import { Dimmer, DimmerDimmable, Loader } from 'semantic-ui-react'
import { Endpoint } from '../../../constant'
import { useStatsMutation } from '../../../redux/api/historical-data.api'
import { useHistory } from 'react-router-dom'
import { useSimulateMutation } from '../../../redux/api/simulation.api'

const TradingPairsStatsTable = () => {
  const history = useHistory()
  const [, { tradingPairs }] = useSimulateMutation({
    selectFromResult: ({ data }) => ({
      tradingPairs: data?.tradingPairs ?? []
    }),
    fixedCacheKey: Endpoint.SIMULATION
  })
  const [, { data: pairsStats = [], isLoading }] = useStatsMutation({ fixedCacheKey: Endpoint.STATS })
  const data = useMemo(
    () => pairsStats.map(
      pairStats => (
        {
          symbol: pairStats.symbol,
          amplitude: pairStats.amplitude,
          delta: pairStats.logDelta
        }
      )
    ),
    [pairsStats]
  ) || []

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

export default TradingPairsStatsTable
