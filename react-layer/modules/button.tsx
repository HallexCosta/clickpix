export const Button = () => {
	const [count, setCount] = window.React.useState<number>(0);
	const clickCount = () => {
		setCount((prev) => prev + 1);
	};

	window.React.useEffect(() => {
		window.clickCount = clickCount;
	}, []);

	return (
		<button
			className="rounded-md p-4 bg-green-500 my-4 text-white"
			onClick={clickCount}
		>
			Click: {count}
		</button>
	);
};
