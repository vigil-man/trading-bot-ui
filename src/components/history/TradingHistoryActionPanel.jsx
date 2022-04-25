import { Grid, GridColumn } from 'semantic-ui-react'
import DateRangePicker from '../common/DateRangePicker'
import { getEpochMilli } from '../../time-utils'
import { useSelector } from 'react-redux'
import { selectFromTime, selectToTime } from '../../redux/slice/date-picker.slice'
import ActionButton from '../common/ActionButton'
import { useTradingHistoryMutation } from '../../redux/api/trading-history.api'
import { Endpoint } from '../../constant'

const TradingHistoryActionPanel = () => {
  const fromTime = useSelector(selectFromTime)
  const toTime = useSelector(selectToTime)
  const [getHistory, { isLoading }] = useTradingHistoryMutation({ fixedCacheKey: Endpoint.HISTORY })
  const timeRange = {
    fromTimestamp: getEpochMilli(fromTime),
    toTimestamp: getEpochMilli(toTime)
  }
  return (
    <Grid centered padded>
      <GridColumn width={3} verticalAlign='middle'>
        <ActionButton
          clickHandler={getHistory}
          payload={timeRange}
          isLoading={isLoading}
          label='Get History'
        />
      </GridColumn>
      <GridColumn width={3}>
        <DateRangePicker fromTime={fromTime} toTime={toTime} />
      </GridColumn>
    </Grid>
  )
}

export default TradingHistoryActionPanel
