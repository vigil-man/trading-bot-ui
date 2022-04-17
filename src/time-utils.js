import moment from 'moment'

export const DATE_TIME_FORMAT = 'yyyy MMM/DD - HH:mm'

export const getFormattedDate = epochMilli =>
  moment(epochMilli).format(DATE_TIME_FORMAT)

export const getEpochMilli = formattedTime =>
  moment(formattedTime, DATE_TIME_FORMAT).valueOf()
