import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { selectBotPort } from '../../../redux/ports/ports.selectors'
import { toggleTrading } from '../../../redux/config/config.slice'
import { selectTradingEnabled } from '../../../redux/config/config.selectors'

const StartTradingButton = () => {
  const dispatch = useDispatch()
  const botPort = useSelector(selectBotPort)
  const tradingEnabled = useSelector(selectTradingEnabled)

  return (
    <Button color={tradingEnabled ? 'blue' : 'red'}
            onClick={() => dispatch(
              toggleTrading(`${process.env.REACT_APP_BOT_HOST}:${botPort}${process.env.REACT_APP_TOGGLE_TRADING_ENDPOINT}`)
            )}>
      {tradingEnabled ? 'Stop trading' : 'Start trading'}
    </Button>
  )
}

export default StartTradingButton