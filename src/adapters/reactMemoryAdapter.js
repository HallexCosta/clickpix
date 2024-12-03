import { memoryAdapter } from './memoryAdapter.js'

export const reactMemoryAdapter = {
  ...memoryAdapter,
  states: null,
  setStates(states) {
    this.states = states
  },
  getStates() {
    return this.states
  }
}
