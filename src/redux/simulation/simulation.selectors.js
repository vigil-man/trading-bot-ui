import { createSelector } from 'reselect'

const simulationSlice = state => state.simulation

export const selectSimulation = createSelector(
  simulationSlice,
  simulationSlice => simulationSlice.simulation
)

export const selectSimulationPairs = createSelector(
  selectSimulation,
  simulation => simulation.tradingPairs
)

export const selectSimulationStatus = createSelector(
  simulationSlice,
  simulationSlice => simulationSlice.status
)

export const selectSimulationError = createSelector(
  simulationSlice,
  simulationSlice => simulationSlice.error
)
