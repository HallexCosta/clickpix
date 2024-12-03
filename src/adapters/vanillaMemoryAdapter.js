import { memoryAdapter } from './memoryAdapter.js'

export const vanillaMemoryAdapter = {
  ...memoryAdapter,
  states: null,
  setStates(states) {
    this.states = states
  },
  getStates() {
    return this.states
  }
}
