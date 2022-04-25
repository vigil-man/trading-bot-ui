import { Button } from 'semantic-ui-react'
import { Endpoint } from '../../../constant'
import { useToggleTradingMutation } from '../../../redux/api/config.api'

const StartTradingButton = () => {
  const [toggleTrading, { data }] = useToggleTradingMutation({ fixedCacheKey: Endpoint.TOGGLE_TRADING })

  return (
    <Button
      color={data ? 'blue' : 'red'}
      onClick={toggleTrading}
    >
      {data ? 'Stop trading' : 'Start trading'}
    </Button>
  )
}

export default StartTradingButton
