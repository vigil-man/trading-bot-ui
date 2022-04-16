import { useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { selectBotUrl } from '../../../redux/config/config.selectors'
import ky from 'ky'
import { Endpoint } from '../../../constant'

const SellBoughtButton = () => {
  const botUrl = useSelector(selectBotUrl)

  return (
    <Button
      color='red'
      onClick={() => ky.get(
        `${botUrl}${process.env.REACT_APP_CORE_PORT}${Endpoint.TRANSACTION_SELL_BOUGHT}`
      )}
    >
      Sell bought
    </Button>
  )
}

export default SellBoughtButton
