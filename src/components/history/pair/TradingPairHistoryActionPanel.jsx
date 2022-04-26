import { Grid, GridColumn } from 'semantic-ui-react'
import DateRangePicker from '../../common/DateRangePicker'
import { getEpochMilli } from '../../../time-utils'
import { useSelector } from 'react-redux'
import { selectFromTime, selectToTime } from '../../../redux/slice/date-picker.slice'
import ActionButton from '../../common/ActionButton'

const TradingPairHistoryActionPanel = ({ symbol, getCandles, getStrategyRecords, isLoading }) => {
  const fromTime = useSelector(selectFromTime)
  const toTime = useSelector(selectToTime)
  const payload = {
    symbol: symbol,
    fromTimestamp: getEpochMilli(fromTime),
    toTimestamp: getEpochMilli(toTime),
    intervalSeconds: 60 * 60
  }
  return (
    <Grid centered padded>
      <GridColumn width={4} verticalAlign='middle'>
        <ActionButton
          clickHandler={getCandles}
          payload={payload}
          isLoading={isLoading}
          label='Get candles'
        />
      </GridColumn>
      <GridColumn width={4} verticalAlign='middle'>
        <ActionButton
          clickHandler={getStrategyRecords}
          payload={payload}
          isLoading={isLoading}
          label='Get strategy records'
        />
      </GridColumn>
      <GridColumn width={8}>
        <DateRangePicker fromTime={fromTime} toTime={toTime} />
      </GridColumn>
    </Grid>

  )
}

export default TradingPairHistoryActionPanel
