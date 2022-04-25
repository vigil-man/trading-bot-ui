import { Grid, GridColumn } from 'semantic-ui-react'
import SymbolSelector from './SymbolSelector'
import DateRangePicker from '../common/DateRangePicker'
import { useSelector } from 'react-redux'
import { selectFromTime, selectToTime } from '../../redux/slice/date-picker.slice'
import { selectChosenSymbols, selectUseAllSymbols } from '../../redux/slice/symbol.slice'
import { useAllSymbolsMutation } from '../../redux/api/trading-pair.api'
import { Endpoint } from '../../constant'
import ActionButton from '../common/ActionButton'
import { getEpochMilli } from '../../time-utils'
import { useSimulateMutation } from '../../redux/api/simulation.api'
import { useEffect } from 'react'

const SimulationActionPanel = () => {
  const fromTime = useSelector(selectFromTime)
  const toTime = useSelector(selectToTime)
  const chosenSymbols = useSelector(selectChosenSymbols)
  const useAll = useSelector(selectUseAllSymbols)
  const [executeSimulation, { isLoading }] = useSimulateMutation({ fixedCacheKey: Endpoint.SIMULATION })
  const [getAllSymbols, { data = [] }] = useAllSymbolsMutation({ fixedCacheKey: Endpoint.ALL_SYMBOLS })
  const payload = {
    symbols: useAll ? data : chosenSymbols,
    fromTimestamp: getEpochMilli(fromTime),
    toTimestamp: getEpochMilli(toTime)
  }

  useEffect(getAllSymbols, [getAllSymbols])

  return (
    <Grid centered verticalAlign='middle'>
      <GridColumn width={7}>
        <SymbolSelector
          allSymbols={data}
          chosenSymbols={chosenSymbols}
          useAll={useAll}
          isLoading={isLoading}
        />
      </GridColumn>
      <GridColumn width={9}>
        <Grid centered>
          <GridColumn width={4} verticalAlign='middle'>
            <ActionButton
              clickHandler={executeSimulation}
              payload={payload}
              isLoading={isLoading}
              label='Execute Simulation'
            />
          </GridColumn>
          <GridColumn width={8}>
            <DateRangePicker fromTime={fromTime} toTime={toTime} />
          </GridColumn>
        </Grid>
      </GridColumn>
    </Grid>
  )
}

export default SimulationActionPanel
