import { Button, ButtonGroup, Dropdown, Grid, GridColumn } from 'semantic-ui-react'
import DateRangePicker from '../../common/DateRangePicker'
import { getEpochMilli } from '../../../utils/time-utils'
import { useSelector } from 'react-redux'
import { selectFromTime, selectToTime } from '../../../redux/slice/date-picker.slice'
import { useCandlesMutation } from '../../../redux/api/historical-data.api'
import { useStrategyRecordsMutation } from '../../../redux/api/trading-cache.api'
import { Endpoint } from '../../../constant'
import { useEffect, useState } from 'react'

const TradingPairHistoryActionPanel = ({ symbol }) => {
  const fromTime = useSelector(selectFromTime)
  const toTime = useSelector(selectToTime)
  const [step, setStep] = useState(3600)
  const [getCandles, { data: candlesData = [], isLoading: isCandlesLoading, reset: resetCandles }] =
    useCandlesMutation({ fixedCacheKey: Endpoint.CANDLES })
  const [getStrategyRecords, { isLoading: isStrategyRecordsLoading, reset: resetRecords }] =
    useStrategyRecordsMutation({ fixedCacheKey: Endpoint.STRATEGY_RECORDS })

  const payload = {
    symbol: symbol,
    fromTimestamp: getEpochMilli(fromTime),
    toTimestamp: getEpochMilli(toTime),
    intervalSeconds: step
  }

  const stepOptions = [
    { text: '15 min', value: 900 },
    { text: '1 hour', value: 3600 },
    { text: '4 hours', value: 14400 }
  ]

  const resetGraphData = () => {
    resetCandles()
    resetRecords()
  }

  useEffect(() => resetGraphData, [])

  return (
    <Grid centered padded>
      <GridColumn width={8} verticalAlign='middle'>
        <ButtonGroup vertical>
          <Button
            primary
            onClick={() => getCandles(payload)}
            loading={isCandlesLoading}
            content='Get candles'
          />
          <Button
            primary
            onClick={() => getStrategyRecords(payload)}
            loading={isStrategyRecordsLoading}
            disabled={isCandlesLoading || !candlesData.length}
            content='Map strategy records'
          />
          <Button
            primary
            onClick={resetGraphData}
            content='Reset'
          />
        </ButtonGroup>
      </GridColumn>
      <GridColumn width={8} verticalAlign='middle'>
        <Dropdown
          fluid
          selection
          defaultValue={stepOptions[1].value}
          options={stepOptions}
          onChange={(e, { value }) => setStep(value)}
        />
        <DateRangePicker fromTime={fromTime} toTime={toTime} />
      </GridColumn>
    </Grid>

  )
}

export default TradingPairHistoryActionPanel
