import { DateTimeInput } from 'semantic-ui-calendar-react'
import { useDispatch, useSelector } from 'react-redux'
import { selectFromTime, selectToTime, updateFromTime, updateToTime } from '../redux/slice/date-picker.slice'
import { DATE_TIME_FORMAT } from '../time-utils'

const DateRangePicker = () => {
  const fromTime = useSelector(selectFromTime)
  const toTime = useSelector(selectToTime)
  const dispatch = useDispatch()

  return (
    <>
      <DateTimeInput
        name='dateTimeFrom'
        placeholder='Date Time From'
        value={fromTime}
        iconPosition='left'
        disableMinute
        closable
        dateTimeFormat={DATE_TIME_FORMAT}
        onChange={(event, { value }) => dispatch(updateFromTime(value))}
      />
      <DateTimeInput
        name='dateTimeTo'
        placeholder='Date Time To'
        value={toTime}
        iconPosition='left'
        disableMinute
        closable
        dateTimeFormat={DATE_TIME_FORMAT}
        onChange={(event, { value }) => dispatch(updateToTime(value))}
      />
    </>
  )
}

export default DateRangePicker
