import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  fromTime: '',
  toTime: '',
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

export const { updateFromTime, updateToTime } = datePickerSlice.actions

export default datePickerSlice
