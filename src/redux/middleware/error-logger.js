import { isRejectedWithValue } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

export const rtkQueryErrorLogger = () => next => action => {
  if (isRejectedWithValue(action)) {
    toast.error(action.error.message, { autoClose: 3000 })
  }
  return next(action)
}
