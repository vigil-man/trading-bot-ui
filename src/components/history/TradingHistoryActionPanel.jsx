import { Button, Grid, GridColumn } from 'semantic-ui-react'
import DateRangePicker from '../common/DateRangePicker'
import { getEpochMilli } from '../../utils/time-utils'
import { useSelector } from 'react-redux'
import { selectFromTime, selectToTime } from '../../redux/slice/date-picker.slice'
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
        <Button
          primary
          onClick={() => getHistory(timeRange)}
          loading={isLoading}
          content='Get History'
        />
      </GridColumn>
      <GridColumn width={3}>
        <DateRangePicker fromTime={fromTime} toTime={toTime} />
      </GridColumn>
    </Grid>
  )
}

export default TradingHistoryActionPanel
