import { useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { selectBotUrl } from '../../../redux/config/config.selectors'
import ky from 'ky'

const SellBoughtButton = () => {
  const botUrl = useSelector(selectBotUrl)

  return (
    <Button
      color='red'
      onClick={() => ky.get(
        `${botUrl}${process.env.REACT_APP_ACTIVITY_SELL_PAIR_ENDPOINT}`
      )}
    >
      Sell bought
    </Button>
  )
}

export default SellBoughtButton
