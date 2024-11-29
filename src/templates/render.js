import { states } from "../states.js";

export const render = {
	add(chargeHTML) {
		document
			.querySelector("#charges-render")
			.insertAdjacentHTML("beforebegin", chargeHTML);
	},
	updateClickPixCheckoutUI({ productId }) {
		const productOrder = states.products.get(productId);

		document.querySelector(".modal.clickpix-checkout #value").innerHTML =
			centsToBRL(productOrder.value);
	},
};
