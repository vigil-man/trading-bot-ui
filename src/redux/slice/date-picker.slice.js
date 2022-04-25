import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'

const INITIAL_STATE = {
  fromTime: '',
  toTime: ''
}
const datePickerSlice = createSlice(
  {
    name: 'datePicker',
    initialState: INITIAL_STATE,
    reducers: {
      updateFromTime: (state, action) => {
        state.fromTime = action.payload
      },
      updateToTime: (state, action) => {
        state.toTime = action.payload
      }
    }
  }
)

const selectDatePicker = state => state.datePicker

export const selectFromTime = createSelector(
  [selectDatePicker],
  datePicker => datePicker.fromTime
)

export const selectToTime = createSelector(
  [selectDatePicker],
  datePicker => datePicker.toTime
)

export const { updateFromTime, updateToTime } = datePickerSlice.actions

export default datePickerSlice
