import { Checkbox, Dimmer, DimmerDimmable, Dropdown, Grid, GridRow } from 'semantic-ui-react'
import { fetchAllSymbols, toggleUseAllSymbols, updateChosenSymbols } from '../../../redux/symbol/symbol.slice'
import { useDispatch, useSelector } from 'react-redux'
import { selectChosenSymbols, selectSymbols, selectUseAllSymbols } from '../../../redux/symbol/symbol.selectors'
import { useEffect } from 'react'
import { selectBotPort } from '../../../redux/ports/ports.selectors'

const SymbolSelector = () => {
  const dispatch = useDispatch()
  const botPort = useSelector(selectBotPort)
  const symbols = useSelector(selectSymbols)
  const chosenSymbols = useSelector(selectChosenSymbols)
  const useAll = useSelector(selectUseAllSymbols)
  const options = symbols.map(symbol => ({ text: symbol, value: symbol }))

  useEffect(() => {
    dispatch(fetchAllSymbols(`${process.env.REACT_APP_BOT_HOST}:${botPort}${process.env.REACT_APP_ACTIVITY_GET_SYMBOLS_ENDPOINT}`))
  }, [dispatch, botPort])

  return (
    <Grid centered>
      <GridRow>
        <DimmerDimmable blurring dimmed={useAll}>
          <Dimmer active={useAll} inverted/>
          <Dropdown
            placeholder="Select symbol"
            fluid
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
        <Checkbox toggle
                  label={'Use all symbols'}
                  value={useAll}
                  onChange={() => dispatch(toggleUseAllSymbols())}/>
      </GridRow>
    </Grid>
  )
}

export default SymbolSelector