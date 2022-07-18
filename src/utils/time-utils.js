import moment from 'moment'

export const DATE_TIME_FORMAT = 'yyyy MMM/DD - HH:mm'

export const getFormattedTimestamp = isoTimestamp =>
  isoTimestamp && isoTimestamp !== 'auto' ? moment(isoTimestamp).format(DATE_TIME_FORMAT) : ''

export const getIsoTimestamp = formattedTime =>
  formattedTime ? moment(formattedTime, DATE_TIME_FORMAT).toISOString() : moment().toISOString()

export const getFormattedDuration = isoDuration =>
  isoDuration ? moment.duration(isoDuration, 'minutes').humanize() : moment.duration.invalid().humanize()
