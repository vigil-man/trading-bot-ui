import { Button } from 'semantic-ui-react'
import { Endpoint } from '../../../constant'
import { useSellBoughtMutation } from '../../../redux/api/transaction.api'

const SellBoughtButton = () => {
  const [sellBought] = useSellBoughtMutation({ fixedCacheKey: Endpoint.SELL_BOUGHT })

  return (
    <Button
      color='red'
      onClick={sellBought}
    >
      Sell bought
    </Button>
  )
}

export default SellBoughtButton
