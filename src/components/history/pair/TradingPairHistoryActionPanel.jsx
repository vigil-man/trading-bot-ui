import { Grid, GridColumn } from 'semantic-ui-react'
import DateRangePicker from '../../common/DateRangePicker'
import { getEpochMilli } from '../../../time-utils'
import { useSelector } from 'react-redux'
import { selectFromTime, selectToTime } from '../../../redux/slice/date-picker.slice'
import ActionButton from '../../common/ActionButton'
import { Endpoint } from '../../../constant'
import { useParams } from 'react-router-dom'
import { useCandlesMutation } from '../../../redux/api/historical-data.api'

const TradingPairHistoryActionPanel = () => {
  const fromTime = useSelector(selectFromTime)
  const toTime = useSelector(selectToTime)
  const { symbol } = useParams()
  const [getCandles, { isLoading }] = useCandlesMutation({ fixedCacheKey: Endpoint.CANDLES })
  const payload = {
    symbol: symbol,
    fromTimestamp: getEpochMilli(fromTime),
    toTimestamp: getEpochMilli(toTime),
    intervalSeconds: 60 * 60
  }
  return (
    <Grid centered padded>
      <GridColumn width={6} verticalAlign='middle'>
        <ActionButton
          clickHandler={getCandles}
          payload={payload}
          isLoading={isLoading}
          label='Get data'
        />
      </GridColumn>
      <GridColumn width={10}>
        <DateRangePicker fromTime={fromTime} toTime={toTime} />
      </GridColumn>
    </Grid>

  )
}

export default TradingPairHistoryActionPanel
