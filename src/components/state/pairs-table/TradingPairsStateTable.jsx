import { useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import SortableTable from '../../SortableTable'
import { columns } from './columns'
import { Dimmer, DimmerDimmable, Loader } from 'semantic-ui-react'
import { useTradingHistoryMutation } from '../../../redux/api/trading-history.api'
import { Endpoint } from '../../../constant'
import { useTradingStateMutation } from '../../../redux/api/trading-state.api'

const TradingPairsStateTable = () => {
  const history = useHistory()
  const [, { tradingPairStates, isLoading }] = useTradingStateMutation({
    selectFromResult: ({ data }) => ({
      tradingPairStates: data?.tradingPairStates ?? []
    }),
    fixedCacheKey: Endpoint.STATE
  })
  const [, { tradingPairs }] = useTradingHistoryMutation({
    selectFromResult: ({ data }) => ({
      tradingPairs: data?.tradingPairs ?? []
    }),
    fixedCacheKey: Endpoint.HISTORY
  })
  const data = useMemo(
    () => tradingPairStates.map(
      tradingPairState => (
        {
          symbol: tradingPairState.symbol,
          minutesDeltaFromLastUpdate: tradingPairState.minutesDeltaFromLastUpdate,
          bought: String(tradingPairState.bought),
          active: String(tradingPairState.active)
        }
      )
    ),
    [tradingPairStates]
  ) || []

  const getSortType = () => 'alphanumeric'

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

export default TradingPairsStateTable
