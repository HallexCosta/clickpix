import { openpix } from '../../src/openpix.js'
import { states } from '../../src/states.js'
// import { hooks } from './hooks.js'
import { hooksIds } from './hooksIds.js'

const nextFn = () => hooksIds.get('beforeCreateCharge')
/**
 *
 * @param {Function} hookHandler
 */
export const beforeCreateChargeHandler = (hookHandler) => {
  const boundedHookHandler = hookHandler.bind(null, nextFn, states)
  openpix.hooks.set('beforeCreateCharge', boundedHookHandler)
  console.log({ beforeCreateChargeHandlerHooks: openpix.hooks })
}
