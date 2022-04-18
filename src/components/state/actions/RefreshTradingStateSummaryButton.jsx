import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { selectBotUrl } from '../../../redux/config/config.selectors'
import { fetchTradingStateSummary } from '../../../redux/trading-state/trading-state.slice'
import { RequestStatus } from '../../../redux/request.statuses'
import { selectTradingStateStatus } from '../../../redux/trading-state/trading-state.selectors'
import { Endpoint } from '../../../constant'

const RefreshTradingStateSummaryButton = () => {
  const dispatch = useDispatch()
  const botUrl = useSelector(selectBotUrl)
  const tradingStateStatus = useSelector(selectTradingStateStatus)

  return (
    <Button
      primary
      loading={tradingStateStatus === RequestStatus.LOADING}
      onClick={() => dispatch(fetchTradingStateSummary(
        `${botUrl}${process.env.REACT_APP_CORE_PORT}${Endpoint.STATE}`)
      )}
    >
      Refresh summary
    </Button>
  )
}

export default RefreshTradingStateSummaryButton
