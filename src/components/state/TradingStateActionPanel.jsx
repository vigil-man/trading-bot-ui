import { Grid, GridColumn } from 'semantic-ui-react'
import TradingStateStats from './TradingStateStats'
import { useTradingStateMutation } from '../../redux/api/trading-state.api'
import { Endpoint } from '../../constant'
import ActionButton from '../common/ActionButton'
import { useSellBoughtMutation } from '../../redux/api/transaction.api'
import { useToggleTradingMutation } from '../../redux/api/config.api'
import ActionToggle from '../common/ActionToggle'

const TradingStateActionPanel = () => {
  const [getTradingState, { isLoading: tradingStateLoading }] = useTradingStateMutation({ fixedCacheKey: Endpoint.STATE })
  const [sellBought, { isLoading: sellBoughtLoading }] = useSellBoughtMutation({ fixedCacheKey: Endpoint.SELL_BOUGHT })
  const [toggleTrading, { data, isLoading: toggleTradingLoading }] = useToggleTradingMutation({ fixedCacheKey: Endpoint.TOGGLE_TRADING })

  return (
    <Grid centered padded verticalAlign='middle'>
      <GridColumn width={3}>
        <ActionButton
          clickHandler={sellBought}
          isLoading={sellBoughtLoading}
          label='Sell bought'
        />
      </GridColumn>
      <GridColumn width={3}>
        <ActionToggle
          clickHandler={toggleTrading}
          toggled={data}
          isLoading={toggleTradingLoading}
          label='Toggle trading'
        />
      </GridColumn>
      <GridColumn width={4}>
        <ActionButton
          clickHandler={getTradingState}
          isLoading={tradingStateLoading}
          label='Fetch trading state'
        />
      </GridColumn>
      <GridColumn width={6}>
        <TradingStateStats />
      </GridColumn>
    </Grid>
  )
}

export default TradingStateActionPanel
