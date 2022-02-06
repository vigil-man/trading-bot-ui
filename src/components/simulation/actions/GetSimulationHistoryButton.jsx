import { Button } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { selectBotPort } from '../../../redux/ports/ports.selectors'
import { getSimulationHistory } from '../../../redux/trading-history/trading-history.slice'

const GetSimulationHistoryButton = () => {
  const botPort = useSelector(selectBotPort)
  const dispatch = useDispatch()
  return (
    <Button primary onClick={
      () => dispatch(
        getSimulationHistory(
          `${process.env.REACT_APP_BOT_HOST}:${botPort}${process.env.REACT_APP_TRADING_HISTORY_SIMULATION_ENDPOINT}`
        ))}>
      Get History
    </Button>
  )
}

export default GetSimulationHistoryButton