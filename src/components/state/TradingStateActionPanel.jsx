import { Button, Checkbox, Divider, Grid, GridColumn } from 'semantic-ui-react'
import TradingStateStats from './TradingStateStats'
import { useTradingStateMutation } from '../../redux/api/trading-state.api'
import { Endpoint } from '../../constant'
import { useAlignPositionsMutation, useClosePositionsMutation } from '../../redux/api/transaction.api'
import { useToggleTradingMutation, useTradingEnabledQuery } from '../../redux/api/config.api'

const TradingStateActionPanel = () => {
  const [getTradingState, { isLoading: tradingStateLoading }] = useTradingStateMutation({ fixedCacheKey: Endpoint.STATE })
  const [closePositions, { isLoading: closePositionsLoading }] = useClosePositionsMutation({ fixedCacheKey: Endpoint.CLOSE_POSITIONS })
  const [alignPositions, { isLoading: alignPositionsLoading }] = useAlignPositionsMutation({ fixedCacheKey: Endpoint.ALIGN_POSITIONS })
  const [toggleTrading, { data: tradingEnabledMutation, isLoading: tradingEnabledLoading }] = useToggleTradingMutation()
  const { data: tradingEnabledQuery } = useTradingEnabledQuery(undefined, { refetchOnMountOrArgChange: true })

  return (
    <Grid centered padded verticalAlign='middle'>
      <GridColumn width={7} textAlign='center'>
        <Grid padded verticalAlign='middle'>
          <GridColumn width={8}>
            <Button
              primary
              onClick={alignPositions}
              loading={alignPositionsLoading}
              content='Align positions'
            />
            <Divider hidden />
            <Button
              primary
              onClick={closePositions}
              loading={closePositionsLoading}
              content='Close positions'
            />
          </GridColumn>
          <GridColumn width={8} verticalAlign='middle'>
            <Checkbox
              toggle
              label='Toggle trading'
              checked={tradingEnabledMutation ?? tradingEnabledQuery}
              onChange={toggleTrading}
              loading={tradingEnabledLoading}
            />
            <Divider hidden />
            <Button
              primary
              onClick={getTradingState}
              loading={tradingStateLoading}
              content='Fetch trading state'
            />
          </GridColumn>
        </Grid>
      </GridColumn>
      <GridColumn width={7}>
        <TradingStateStats />
      </GridColumn>
    </Grid>
  )
}

export default TradingStateActionPanel
