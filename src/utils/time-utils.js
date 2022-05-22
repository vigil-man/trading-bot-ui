import moment from 'moment'

export const DATE_TIME_FORMAT = 'yyyy MMM/DD - HH:mm'

export const getFormattedTimestamp = epochMilli =>
  epochMilli && !isNaN(epochMilli) ? moment(epochMilli).format(DATE_TIME_FORMAT) : ''

export const getEpochMilli = formattedTime =>
  formattedTime ? moment(formattedTime, DATE_TIME_FORMAT).valueOf() : moment.now()

export const getIsoTimestamp = formattedTime =>
  formattedTime ? moment(formattedTime, DATE_TIME_FORMAT).toISOString() : moment().toISOString()
