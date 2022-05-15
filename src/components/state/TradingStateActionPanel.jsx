import { Button, ButtonGroup, Checkbox, Grid, GridColumn } from 'semantic-ui-react'
import TradingStateStats from './TradingStateStats'
import { useTradingStateMutation } from '../../redux/api/trading-state.api'
import { Endpoint } from '../../constant'
import { useSellBoughtMutation } from '../../redux/api/transaction.api'
import { useToggleTradingMutation } from '../../redux/api/config.api'
import { useState } from 'react'

const TradingStateActionPanel = () => {
  const [getTradingState, { isLoading: tradingStateLoading }] = useTradingStateMutation({ fixedCacheKey: Endpoint.STATE })
  const [sellBought, { isLoading: sellBoughtLoading }] = useSellBoughtMutation({ fixedCacheKey: Endpoint.SELL_BOUGHT })
  const [toggleTrading, { data, isLoading: toggleTradingLoading }] = useToggleTradingMutation({ fixedCacheKey: Endpoint.TOGGLE_TRADING })
  const [previousValue, setPreviousValue] = useState(false)

  const handleToggle = (e, { checked }) => {
    setPreviousValue(!checked)
    toggleTrading()
  }

  return (
    <Grid centered padded verticalAlign='middle'>
      <GridColumn width={8} textAlign='center'>
        <ButtonGroup vertical>
          <Button
            primary
            onClick={sellBought}
            loading={sellBoughtLoading}
            content='Sell bought'
          />
          <Checkbox
            as={Button}
            toggle
            label='Toggle trading'
            checked={data ?? previousValue}
            onChange={handleToggle}
            loading={toggleTradingLoading}
          />
          <Button
            primary
            onClick={getTradingState}
            loading={tradingStateLoading}
            content='Fetch trading state'
          />
        </ButtonGroup>
      </GridColumn>
      <GridColumn width={8}>
        <TradingStateStats />
      </GridColumn>
    </Grid>
  )
}

export default TradingStateActionPanel
