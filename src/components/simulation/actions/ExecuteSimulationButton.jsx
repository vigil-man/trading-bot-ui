import { Button } from 'semantic-ui-react'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { selectFromTime, selectToTime } from '../../../redux/date-picker/date-picker.selectors'
import { selectChosenSymbols, selectSymbols, selectUseAllSymbols } from '../../../redux/symbol/symbol.selectors'
import { getEpochMilli } from '../../../time-utils'
import { useSimulateMutation } from '../../../redux/api/simulation.api'
import { Endpoint } from '../../../constant'

const ExecuteSimulationButton = () => {
  const fromTime = useSelector(selectFromTime)
  const toTime = useSelector(selectToTime)
  const symbols = useSelector(selectSymbols)
  const chosenSymbols = useSelector(selectChosenSymbols)
  const useAll = useSelector(selectUseAllSymbols)
  const requestBody = {
    symbols: useAll ? symbols : chosenSymbols,
    fromTimestamp: getEpochMilli(fromTime),
    toTimestamp: toTime ? getEpochMilli(toTime) : moment.now()
  }
  const [executeSimulation, { isLoading }] = useSimulateMutation({ fixedCacheKey: Endpoint.SIMULATION })

  return (
    <Button
      color='blue'
      loading={isLoading}
      onClick={() => executeSimulation(requestBody)}
    >
      Execute simulation
    </Button>
  )
}

export default ExecuteSimulationButton
