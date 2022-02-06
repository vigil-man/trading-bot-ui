import { Button } from 'semantic-ui-react'
import ky from 'ky'
import moment from 'moment'
import { Constants } from '../../../constants'
import { useSelector } from 'react-redux'
import { selectFromTime, selectToTime } from '../../../redux/date-picker/date-picker.selectors'
import { selectChosenSymbols, selectSymbols, selectUseAllSymbols } from '../../../redux/symbol/symbol.selectors'
import { selectBotPort } from '../../../redux/ports/ports.selectors'

const StartSimulationButton = () => {
  const botPort = useSelector(selectBotPort)
  const fromTime = useSelector(selectFromTime)
  const toTime = useSelector(selectToTime)
  const symbols = useSelector(selectSymbols)
  const chosenSymbols = useSelector(selectChosenSymbols)
  const useAll = useSelector(selectUseAllSymbols)
  const requestBody = {
    symbols: useAll ? symbols : chosenSymbols,
    fromTimestamp: moment(fromTime, Constants.dateTimeFormat).valueOf(),
    toTimestamp: toTime ? moment(toTime, Constants.dateTimeFormat).valueOf() : moment.now()
  }
  return (
    <Button color={'blue'}
            onClick={() => ky.post(
              `${process.env.REACT_APP_BOT_HOST}:${botPort}${process.env.REACT_APP_SIMULATION_START_ENDPOINT}`,
              { json: requestBody, timeout: false }
            )}>
      Start simulation
    </Button>
  )
}

export default StartSimulationButton