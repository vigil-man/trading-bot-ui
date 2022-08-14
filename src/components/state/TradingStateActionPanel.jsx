import { Button, ButtonGroup, Checkbox, Grid, GridColumn } from 'semantic-ui-react'
import TradingStateStats from './TradingStateStats'
import { useTradingStateMutation } from '../../redux/api/trading-state.api'
import { Endpoint } from '../../constant'
import { useClosePositionsMutation } from '../../redux/api/transaction.api'
import { useToggleTradingMutation, useTradingEnabledQuery } from '../../redux/api/config.api'

const TradingStateActionPanel = () => {
  const [getTradingState, { isLoading: tradingStateLoading }] = useTradingStateMutation({ fixedCacheKey: Endpoint.STATE })
  const [closePositions, { isLoading: closePositionsLoading }] = useClosePositionsMutation({ fixedCacheKey: Endpoint.CLOSE_POSITIONS })
  const [toggleTrading, { data: tradingEnabledMutation, isLoading: tradingEnabledLoading }] = useToggleTradingMutation()
  const { data: tradingEnabledQuery } = useTradingEnabledQuery(undefined, { refetchOnMountOrArgChange: true })

  return (
    <Grid centered padded verticalAlign='middle'>
      <GridColumn width={8} textAlign='center'>
        <ButtonGroup vertical>
          <Button
            primary
            onClick={closePositions}
            loading={closePositionsLoading}
            content='Close positions'
          />
          <Checkbox
            as={Button}
            toggle
            label='Toggle trading'
            checked={tradingEnabledMutation ?? tradingEnabledQuery}
            onChange={toggleTrading}
            loading={tradingEnabledLoading}
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
