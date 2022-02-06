import {createSelector} from 'reselect'

const selectDatePicker = state => state.datePicker

export const selectFromTime = createSelector(
    [selectDatePicker],
    datePicker => datePicker.fromTime
)

export const selectToTime = createSelector(
    [selectDatePicker],
    datePicker => datePicker.toTime
)