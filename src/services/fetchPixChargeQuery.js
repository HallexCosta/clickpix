import { config } from "../../config/config.js";
import { createPromiseWithResolvers } from "../common/createPromiseWithResolvers.js";
import { GetPixChargeByCorrelationIDQuery } from "../queries/GetPixChargeByCorrelationIDQuery.js";

// correlationID = "2A3lZN4Nj2EY6bEUBtYbxyvRrLk1gf"
export const fetchPixChargeQuery = async (correlationID) => {
	const { promise, resolve } = createPromiseWithResolvers();

	fetch(config.graphqlURL, {
		method: "POST",
		body: JSON.stringify({
			name: "PixDialogGetChargeQuery",
			operationName: "PixDialogGetChargeQuery",
			query: GetPixChargeByCorrelationIDQuery,
			variables: {
				correlationID,
			},
		}),
		mode: "cors",
		headers: {
			Authorization: config.appID,
			"Content-Type": "application/json",
		},
	})
		.then((r) => r.json())
		.then(resolve)
		.catch(() => resolve(null));

	return promise;
};
