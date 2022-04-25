import { Checkbox, Dimmer, DimmerDimmable, Dropdown, Grid, GridRow } from 'semantic-ui-react'
import {
  selectChosenSymbols,
  selectUseAllSymbols,
  toggleUseAllSymbols,
  updateChosenSymbols
} from '../../../redux/slice/symbol.slice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Endpoint } from '../../../constant'
import { useSimulateMutation } from '../../../redux/api/simulation.api'
import { useAllSymbolsMutation } from '../../../redux/api/trading-pair.api'

const SymbolSelector = () => {
  const dispatch = useDispatch()
  const chosenSymbols = useSelector(selectChosenSymbols)
  const useAll = useSelector(selectUseAllSymbols)
  const [, { isLoading }] = useSimulateMutation({ fixedCacheKey: Endpoint.SIMULATION })
  const [getAllSymbols, { data = [] }] = useAllSymbolsMutation({ fixedCacheKey: Endpoint.ALL_SYMBOLS })

  const options = data.map(symbol => ({ text: symbol, value: symbol }))

  useEffect(getAllSymbols, [getAllSymbols])

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
