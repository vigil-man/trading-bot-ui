import { Button, Checkbox, Dimmer, DimmerDimmable, Grid, GridColumn, Loader } from 'semantic-ui-react'
import TradingStateStats from './TradingStateStats'
import { useTradingStateMutation } from '../../redux/api/trading-state.api'
import { Endpoint } from '../../constant'
import { useSellBoughtMutation } from '../../redux/api/transaction.api'
import { useToggleTradingMutation } from '../../redux/api/config.api'

const TradingStateActionPanel = () => {
  const [getTradingState, { isLoading: tradingStateLoading }] = useTradingStateMutation({ fixedCacheKey: Endpoint.STATE })
  const [sellBought, { isLoading: sellBoughtLoading }] = useSellBoughtMutation({ fixedCacheKey: Endpoint.SELL_BOUGHT })
  const [toggleTrading, { data, isLoading: toggleTradingLoading }] = useToggleTradingMutation({ fixedCacheKey: Endpoint.TOGGLE_TRADING })

  return (
    <Grid centered padded verticalAlign='middle'>
      <GridColumn width={3}>
        <Button
          primary
          onClick={sellBought}
          loading={sellBoughtLoading}
          content='Sell bought'
        />
      </GridColumn>
      <GridColumn width={3}>
        <DimmerDimmable blurring dimmed={toggleTradingLoading}>
          <Dimmer active={toggleTradingLoading} inverted>
            <Loader size='mini' />
          </Dimmer>
          <Checkbox
            toggle
            label='Toggle trading'
            value={data}
            onChange={toggleTrading}
          />
        </DimmerDimmable>
      </GridColumn>
      <GridColumn width={4}>
        <Button
          primary
          onClick={getTradingState}
          loading={tradingStateLoading}
          content='Fetch trading state'
        />
      </GridColumn>
      <GridColumn width={6}>
        <TradingStateStats />
      </GridColumn>
    </Grid>
  )
}

export default TradingStateActionPanel
