import { DateTimeInput } from 'semantic-ui-calendar-react'
import { useDispatch } from 'react-redux'
import { updateFromTime, updateToTime } from '../../redux/slice/date-picker.slice'
import { DATE_TIME_FORMAT } from '../../time-utils'

const DateRangePicker = ({ fromTime, toTime }) => {
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
