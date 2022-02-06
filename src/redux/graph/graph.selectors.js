import {createSelector} from 'reselect'

const selectGraphData = state => state.graph

export const selectCurrentGraphData = createSelector(
    [selectGraphData],
    graph => graph.graphData
)

export const selectGraphDataGetStatus = createSelector(
    [selectGraphData],
    graph => graph.status
)

export const selectGraphDataGetError = createSelector(
    [selectGraphData],
    graph => graph.error
)
