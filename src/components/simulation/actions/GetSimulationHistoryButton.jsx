import { Button } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { selectBotUrl } from '../../../redux/config/config.selectors'
import { getSimulationHistory } from '../../../redux/trading-history/trading-history.slice'

const GetSimulationHistoryButton = () => {
  const botUrl = useSelector(selectBotUrl)
  const dispatch = useDispatch()
  return (
    <Button
      primary onClick={
      () => dispatch(
        getSimulationHistory(
          `${botUrl}${process.env.REACT_APP_TRADING_HISTORY_SIMULATION_ENDPOINT}`
        ))
    }
    >
      Get History
    </Button>
  )
}

export default GetSimulationHistoryButton
