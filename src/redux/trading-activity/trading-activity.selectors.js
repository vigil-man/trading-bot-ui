import { createSelector } from 'reselect'

const activitySlice = state => state.tradingActivity

export const selectActivitySummary = createSelector(
  activitySlice,
  activitySlice => activitySlice.activitySummary
)

export const selectActivityPairs = createSelector(
  selectActivitySummary,
  activitySummary => activitySummary.pairActivities
)

export const selectActivityStatus = createSelector(
  activitySlice,
  activitySlice => activitySlice.status
)

export const selectActivityError = createSelector(
  activitySlice,
  activitySlice => activitySlice.error
)
