import { Checkbox, Dimmer, DimmerDimmable, Dropdown, Grid, GridRow } from 'semantic-ui-react'
import { fetchAllSymbols, toggleUseAllSymbols, updateChosenSymbols } from '../../../redux/symbol/symbol.slice'
import { useDispatch, useSelector } from 'react-redux'
import { selectChosenSymbols, selectSymbols, selectUseAllSymbols } from '../../../redux/symbol/symbol.selectors'
import { useEffect } from 'react'
import { selectBotUrl } from '../../../redux/config/config.selectors'
import { Endpoint } from '../../../constant'
import { useSimulateMutation } from '../../../redux/api/simulation.api'

const SymbolSelector = () => {
  const dispatch = useDispatch()
  const botUrl = useSelector(selectBotUrl)
  const symbols = useSelector(selectSymbols)
  const chosenSymbols = useSelector(selectChosenSymbols)
  const useAll = useSelector(selectUseAllSymbols)
  const [, { isLoading }] = useSimulateMutation({ fixedCacheKey: Endpoint.SIMULATION })

  const options = symbols.map(symbol => ({ text: symbol, value: symbol }))

  useEffect(() => {
    dispatch(fetchAllSymbols(`${botUrl}${process.env.REACT_APP_CORE_PORT}${Endpoint.PAIR_GET_SYMBOLS}`))
  }, [dispatch, botUrl])

  return (
    <DimmerDimmable blurring dimmed={isLoading}>
      <Dimmer active={isLoading} inverted />
      <Grid centered padded>
        <GridRow>
          <DimmerDimmable blurring dimmed={useAll}>
            <Dimmer active={useAll} inverted />
            <Dropdown
              placeholder='Select symbol'
              multiple
              search
              selection
              options={options}
              value={chosenSymbols}
              onChange={(e, { value }) => dispatch(updateChosenSymbols(value))}
            />
          </DimmerDimmable>
        </GridRow>
        <GridRow>
          <Checkbox
            toggle
            label='Use all symbols'
            value={useAll}
            onChange={() => dispatch(toggleUseAllSymbols())}
          />
        </GridRow>
      </Grid>
    </DimmerDimmable>
  )
}

export default SymbolSelector
