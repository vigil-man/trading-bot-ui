import { Button, Grid, GridColumn } from 'semantic-ui-react'
import DateRangePicker from '../common/DateRangePicker'
import { getIsoTimestamp } from '../../utils/time-utils'
import { useSelector } from 'react-redux'
import { selectFromTime, selectToTime } from '../../redux/slice/date-picker.slice'
import { Endpoint } from '../../constant'
import { useStatsMutation } from '../../redux/api/historical-data.api'

const HistoricalStatsActionPanel = () => {
  const fromTime = useSelector(selectFromTime)
  const toTime = useSelector(selectToTime)
  const [getStats, { isLoading }] = useStatsMutation({ fixedCacheKey: Endpoint.STATS })
  const timeRange = {
    fromTimestamp: getIsoTimestamp(fromTime),
    toTimestamp: getIsoTimestamp(toTime)
  }
  return (
    <Grid centered padded>
      <GridColumn width={3} verticalAlign='middle'>
        <Button
          primary
          onClick={() => getStats(timeRange)}
          loading={isLoading}
          content='Get Stats'
        />
      </GridColumn>
      <GridColumn width={4}>
        <DateRangePicker fromTime={fromTime} toTime={toTime} />
      </GridColumn>
    </Grid>
  )
}

export default HistoricalStatsActionPanel
