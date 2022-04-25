import { Button } from 'semantic-ui-react'
import { Endpoint } from '../../../constant'
import { useTradingStateMutation } from '../../../redux/api/trading-state.api'

const FetchTradingStateButton = () => {
  const [getTradingState, { isLoading }] = useTradingStateMutation({ fixedCacheKey: Endpoint.STATE })

  return (
    <Button
      primary
      loading={isLoading}
      onClick={getTradingState}
    >
      Fetch trading state
    </Button>
  )
}

export default FetchTradingStateButton
