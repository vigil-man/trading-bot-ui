import { Button, Grid, GridColumn } from 'semantic-ui-react'
import DateRangePicker from '../../common/DateRangePicker'
import { getEpochMilli } from '../../../utils/time-utils'
import { useSelector } from 'react-redux'
import { selectFromTime, selectToTime } from '../../../redux/slice/date-picker.slice'
import { useCandlesMutation } from '../../../redux/api/historical-data.api'
import { useStrategyRecordsMutation } from '../../../redux/api/trading-cache.api'
import { Endpoint } from '../../../constant'

const TradingPairHistoryActionPanel = ({ symbol }) => {
  const fromTime = useSelector(selectFromTime)
  const toTime = useSelector(selectToTime)
  const [getCandles, { data: candlesData = [], isLoading: isCandlesLoading }] =
    useCandlesMutation({ fixedCacheKey: Endpoint.CANDLES })
  const [getStrategyRecords, { isLoading: isStrategyRecordsLoading }] =
    useStrategyRecordsMutation({ fixedCacheKey: Endpoint.STRATEGY_RECORDS })

  const payload = {
    symbol: symbol,
    fromTimestamp: getEpochMilli(fromTime),
    toTimestamp: getEpochMilli(toTime),
    intervalSeconds: 60 * 240
  }
  return (
    <Grid centered padded>
      <GridColumn width={4} verticalAlign='middle'>
        <Button
          primary
          onClick={() => getCandles(payload)}
          loading={isCandlesLoading}
          content='Get candles'
        />
      </GridColumn>
      <GridColumn width={4} verticalAlign='middle'>
        <Button
          primary
          onClick={() => getStrategyRecords(payload)}
          loading={isStrategyRecordsLoading}
          disabled={isCandlesLoading || !candlesData.length}
          content='Get strategy records'
        />
      </GridColumn>
      <GridColumn width={8}>
        <DateRangePicker fromTime={fromTime} toTime={toTime} />
      </GridColumn>
    </Grid>

  )
}

export default TradingPairHistoryActionPanel
