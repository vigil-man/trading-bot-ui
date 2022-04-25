import { Button } from 'semantic-ui-react'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { getEpochMilli } from '../../../time-utils'
import { useSimulateMutation } from '../../../redux/api/simulation.api'
import { Endpoint } from '../../../constant'
import { useAllSymbolsMutation } from '../../../redux/api/trading-pair.api'
import { selectChosenSymbols, selectUseAllSymbols } from '../../../redux/slice/symbol.slice'
import { selectFromTime, selectToTime } from '../../../redux/slice/date-picker.slice'

const ExecuteSimulationButton = () => {
  const fromTime = useSelector(selectFromTime)
  const toTime = useSelector(selectToTime)
  const chosenSymbols = useSelector(selectChosenSymbols)
  const useAll = useSelector(selectUseAllSymbols)
  const [, { data = [] }] = useAllSymbolsMutation({ fixedCacheKey: Endpoint.ALL_SYMBOLS })

  const requestBody = {
    symbols: useAll ? data : chosenSymbols,
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
