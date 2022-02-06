import { useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { selectBotPort } from '../../../redux/ports/ports.selectors'
import ky from 'ky'

const SellBoughtButton = () => {
  const botPort = useSelector(selectBotPort)

  return (
    <Button color="red"
            onClick={() => ky.get(
              `${process.env.REACT_APP_BOT_HOST}:${botPort}${process.env.REACT_APP_ACTIVITY_SELL_PAIR_ENDPOINT}`
            )}>
      Sell bought
    </Button>
  )
}

export default SellBoughtButton