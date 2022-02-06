import { DateTimeInput } from 'semantic-ui-calendar-react'
import { useDispatch, useSelector } from 'react-redux'
import { updateFromTime, updateToTime } from '../redux/date-picker/date-picker.slice'
import { selectFromTime, selectToTime } from '../redux/date-picker/date-picker.selectors'
import { Constants } from '../constants'

const DateRangePicker = () => {
  const fromTime = useSelector(selectFromTime)
  const toTime = useSelector(selectToTime)
  const dispatch = useDispatch()

  return (
    <>
      <DateTimeInput
        name="dateTimeFrom"
        placeholder="Date Time From"
        value={fromTime}
        iconPosition="left"
        disableMinute={true}
        closable={true}
        dateTimeFormat={Constants.dateTimeFormat}
        onChange={(event, { value }) => dispatch(updateFromTime(value))}
      />
      <DateTimeInput
        name="dateTimeTo"
        placeholder="Date Time To"
        value={toTime}
        iconPosition="left"
        disableMinute={true}
        closable={true}
        dateTimeFormat={Constants.dateTimeFormat}
        onChange={(event, { value }) => dispatch(updateToTime(value))}
      />
    </>
  )
}

export default DateRangePicker