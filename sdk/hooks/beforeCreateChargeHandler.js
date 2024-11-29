import { states } from "../../src/states.js";
import { hooks } from "./hooks.js";
import { hooksIds } from "./hooksIds.js";

const nextFn = () => hooksIds.get("beforeCreateCharge");
/**
 *
 * @param {Function} hookHandler
 */
export const beforeCreateChargeHandler = (hookHandler) => {
	const boundedHookHandler = hookHandler.bind(null, nextFn, states);
	hooks.set("beforeCreateCharge", boundedHookHandler);
};
