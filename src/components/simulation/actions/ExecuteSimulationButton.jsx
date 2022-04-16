import { Button } from 'semantic-ui-react'
import moment from 'moment'
import { Common, Endpoint } from '../../../constant'
import { useDispatch, useSelector } from 'react-redux'
import { selectFromTime, selectToTime } from '../../../redux/date-picker/date-picker.selectors'
import { selectChosenSymbols, selectSymbols, selectUseAllSymbols } from '../../../redux/symbol/symbol.selectors'
import { selectBotUrl } from '../../../redux/config/config.selectors'
import { executeSimulation } from '../../../redux/simulation/simulation.slice'
import { selectSimulationStatus } from '../../../redux/simulation/simulation.selectors'
import { RequestStatus } from '../../../redux/request.statuses'

const ExecuteSimulationButton = () => {
  const botUrl = useSelector(selectBotUrl)
  const fromTime = useSelector(selectFromTime)
  const toTime = useSelector(selectToTime)
  const symbols = useSelector(selectSymbols)
  const chosenSymbols = useSelector(selectChosenSymbols)
  const useAll = useSelector(selectUseAllSymbols)
  const simulationStatus = useSelector(selectSimulationStatus)
  const dispatch = useDispatch()
  const requestBody = {
    symbols: useAll ? symbols : chosenSymbols,
    fromTimestamp: moment(fromTime, Common.dateTimeFormat).valueOf(),
    toTimestamp: toTime ? moment(toTime, Common.dateTimeFormat).valueOf() : moment.now()
  }
  return (
    <Button
      color='blue'
      loading={simulationStatus === RequestStatus.LOADING}
      onClick={() => dispatch(
        executeSimulation({
          url: `${botUrl}${process.env.REACT_APP_STRATEGY_PORT}${Endpoint.SIMULATION}`,
          body: requestBody
        }
        ))}
    >
      Execute simulation
    </Button>
  )
}

export default ExecuteSimulationButton
