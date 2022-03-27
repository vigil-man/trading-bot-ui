import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { selectBotUrl, selectTradingEnabled } from '../../../redux/config/config.selectors'
import { toggleTrading } from '../../../redux/config/config.slice'

const StartTradingButton = () => {
  const dispatch = useDispatch()
  const botUrl = useSelector(selectBotUrl)
  const tradingEnabled = useSelector(selectTradingEnabled)

  return (
    <Button
      color={tradingEnabled ? 'blue' : 'red'}
      onClick={() => dispatch(
        toggleTrading(`${botUrl}${process.env.REACT_APP_TOGGLE_TRADING_ENDPOINT}`)
      )}
    >
      {tradingEnabled ? 'Stop trading' : 'Start trading'}
    </Button>
  )
}

export default StartTradingButton
