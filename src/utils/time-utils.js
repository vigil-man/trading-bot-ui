import moment from 'moment'

export const DATE_TIME_FORMAT = 'yyyy MMM/DD - HH:mm'

export const getFormattedDate = epochMilli =>
  epochMilli ? moment(epochMilli).format(DATE_TIME_FORMAT) : moment().format(DATE_TIME_FORMAT)

export const getEpochMilli = formattedTime =>
  formattedTime ? moment(formattedTime, DATE_TIME_FORMAT).valueOf() : moment.now()
