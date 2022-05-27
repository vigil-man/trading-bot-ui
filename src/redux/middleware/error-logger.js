import { isRejectedWithValue } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

export const rtkQueryErrorLogger = () => next => action => {
  if (isRejectedWithValue(action)) {
    const message = action.payload?.error ?? action.payload?.data?.error ?? action.error?.message
    toast.error(message, { autoClose: 3000 })
  }
  return next(action)
}
