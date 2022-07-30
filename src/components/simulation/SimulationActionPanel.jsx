import { Button, ButtonGroup, Grid, GridColumn } from 'semantic-ui-react'
import SymbolSelector from './SymbolSelector'
import DateRangePicker from '../common/DateRangePicker'
import { useSelector } from 'react-redux'
import { selectFromTime, selectToTime } from '../../redux/slice/date-picker.slice'
import { selectChosenSymbols, selectUseAllSymbols } from '../../redux/slice/symbol.slice'
import { useAllSymbolsQuery } from '../../redux/api/trading-pair.api'
import { Endpoint } from '../../constant'
import { getIsoTimestamp } from '../../utils/time-utils'
import { useSimulateMutation } from '../../redux/api/simulation.api'
import { useSimulationHistoryMutation } from '../../redux/api/trading-history.api'

const SimulationActionPanel = () => {
  const fromTime = useSelector(selectFromTime)
  const toTime = useSelector(selectToTime)
  const chosenSymbols = useSelector(selectChosenSymbols)
  const useAll = useSelector(selectUseAllSymbols)
  const [executeSimulation, { isLoading }] = useSimulateMutation({ fixedCacheKey: Endpoint.SIMULATION })
  const [getSimulationHistory, { isLoading: historyLoading }] = useSimulationHistoryMutation({ fixedCacheKey: Endpoint.SIMULATION_HISTORY })
  const { data: allSymbols = [] } = useAllSymbolsQuery(undefined, { refetchOnMountOrArgChange: true })
  const payload = {
    symbols: useAll ? allSymbols : chosenSymbols,
    fromTimestamp: getIsoTimestamp(fromTime),
    toTimestamp: getIsoTimestamp(toTime)
  }

  return (
    <Grid centered verticalAlign='middle'>
      <GridColumn width={7}>
        <SymbolSelector
          allSymbols={allSymbols}
          chosenSymbols={chosenSymbols}
          useAll={useAll}
          isLoading={isLoading}
        />
      </GridColumn>
      <GridColumn width={9}>
        <Grid centered>
          <GridColumn width={6} verticalAlign='middle'>
            <ButtonGroup vertical>
              <Button
                primary
                onClick={() => executeSimulation(payload)}
                loading={isLoading}
                content='Execute Simulation'
              />
              <Button
                primary
                onClick={() => getSimulationHistory(payload)}
                loading={historyLoading}
                content='Get history'
              />
            </ButtonGroup>
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
