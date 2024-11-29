import { config } from "../config/config";

export const openpix = {
	init() {
		const appID = config.appID;

		window.$openpix.push([
			"config",
			{
				appID,
			},
		]);

		this._loadMemory(document.querySelectorAll(".clickpix"));
	},
	_loadMemory(elements) {
		Array.from(elements, (htmlClickPix) => {
			const productId = htmlClickPix.dataset.productId;
			if (!productId) {
				console.log(productId);
				console.error("[data-product-id] need a unique value");
			}
			console.log(htmlClickPix);

			if (!states.products.has(productId)) {
				map.set(productId, {
					value: Number(htmlClickPix.dataset.value),
					correlationID: generateCorrelationUniqueId(30),
					additionalInfo: htmlClickPix.dataset.additionalInfo,
					status: "CHARGE_NOT_EMITTED",
					productId,
				});

				htmlClickPix.onclick = displayOpenPixModal.bind(htmlClickPix);
			} else {
				htmlClickPix.onclick = () =>
					alert(
						"This product has repeated id... ClickPix was not configured in the element with border red",
					);
				htmlClickPix.style = "border: 1px solid red;";
				console.error("[data-product-id] cannot have a duplicate value");
			}
		});
	},
};
