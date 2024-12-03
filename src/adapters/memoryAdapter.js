export const memoryAdapter = {
  states: null,
  setStates(states) {
    throw new Error(
      'MemoryAdapter abstract object setStates method need to implement'
    )
  },
  getStates() {
    throw new Error(
      'MemoryAdapter abstract object getStates method need to implement'
    )
  }
}
