import { states } from "../src/states.js";
import { beforeCreateChargeHandler } from "./hooks/beforeCreateChargeHandler.js";

const availableStates = ["orders", "products"];

window.$openpixSDK = {
	/**
	 *
	 * @param {string|number} memoryId
	 * @param {string} state
	 * @param {object} updatedData by default this functions overwrite all properties not informed in update
	 * with exception from properties (value)
	 * use the .get function to help you to avoid this behavior
	 * @returns boolean
	 */
	updateIn(memoryId, state, updatedData) {
		console.log("> updateIn", memoryId, state, updatedData);

		if (!availableStates.includes(state)) {
			return console.error("State not avaialble");
		}
		if (!states[state].has(memoryId)) {
			console.error("memoryId not found in ".state);
			return false;
		}

		const oldData = states[state].get(memoryId);
		if (updatedData.value !== oldData.value) {
			console.error('Cannot update property "value"');
			return false;
		}

		states[state].set(memoryId, {
			value: oldData.value,
			...updatedData,
		});
		return true;
	},
	/**
	 *
	 * @param {string|number} memoryId
	 * @param {string} state
	 * @returns object
	 */
	get(memoryId, state) {
		return states[state].get(memoryId);
	},
	/**
	 *
	 * @param {string} hookName name from hook that should be called during the process of create a charge
	 * @param {*} hookHandler handler that will be called to handle with this hook
	 * @returns boolean
	 */
	addEvent(hookName, hookHandler) {
		const handlers = {
			beforeCreateCharge: beforeCreateChargeHandler,
		};

		if (!handlers[hookName]) {
			console.error("hook not available");
			return false;
		}

		if (hookHandler[Symbol.toStringTag] !== "AsyncFunction") {
			return console.error("Only supported asynchronous function");
		}

		const handlerFn = handlers[hookName];
		handlerFn(hookHandler);
		return true;
	},
};
