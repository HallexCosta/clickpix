export const centsToBRL = (cents) => {
	// Convert cents to BRL
	const brlAmount = cents / 100;

	// Format the amount to BRL currency
	const formattedAmount = new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	}).format(brlAmount);

	return formattedAmount;
};
