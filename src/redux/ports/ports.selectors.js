import {createSelector} from 'reselect'

const selectPorts = state => state.ports

export const selectBotPort = createSelector(
    [selectPorts],
    ports => ports.botPort
)

export const selectCachePort = createSelector(
    [selectPorts],
    ports => ports.cachePort
)