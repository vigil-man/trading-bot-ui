import { Checkbox, Dimmer, DimmerDimmable, Dropdown, Grid, GridRow } from 'semantic-ui-react'
import { toggleUseAllSymbols, updateChosenSymbols } from '../../redux/slice/symbol.slice'
import { useDispatch } from 'react-redux'

const SymbolSelector = ({ allSymbols, chosenSymbols, useAll, isLoading }) => {
  const dispatch = useDispatch()
  const options = allSymbols.map(symbol => ({ text: symbol, value: symbol }))

  return (
    <Grid centered padded>
      <GridRow>
        <DimmerDimmable blurring dimmed={useAll || isLoading}>
          <Dimmer active={useAll || isLoading} inverted />
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
          checked={useAll}
          onChange={() => dispatch(toggleUseAllSymbols())}
        />
      </GridRow>
    </Grid>
  )
}

export default SymbolSelector
