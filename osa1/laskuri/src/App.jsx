import { useState } from "react";

const History = (props) => {
	if (props.allClicks.length === 0) {
		return <div>the app is used by pressing the buttons</div>;
	}
	return <div>button press history: {props.allClicks.join(" ")}</div>;
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
	const [left, setLeft] = useState(0);
	const [right, setRight] = useState(0);
	const [allClicks, setAll] = useState([]);
	const [total, setTotal] = useState(0);
	const [value, setValue] = useState(10);

	const handleLeftClick = () => {
		setAll(allClicks.concat("L"));
		const updatedLeft = left + 1;
		setLeft(updatedLeft);
		setTotal(updatedLeft + right);
	};

	const handleRightClick = () => {
		setAll(allClicks.concat("R"));
		const updateRight = right + 1;
		setRight(updateRight);
		setTotal(left + updateRight);
	};

	// function palauttama funktio versio
	const setToValue = (newValue) => () => {
		console.log("value now", newValue);
		setValue(newValue);
	};

	// normaali versio
	const setToValue2 = (newValue) => {
		console.log("value now", newValue);
		setValue(newValue);
	};

	return (
		<div>
			{left}
			<Button onClick={handleLeftClick} text="left" />
			<Button onClick={handleRightClick} text="right" />
			{right}
			<History allClicks={allClicks} />
			<p>total {total}</p>
			<button onClick={setToValue(1000)}>thousand</button>
			<button onClick={setToValue(0)}>reset</button>
			<button onClick={setToValue(value + 1)}>increment</button>
			<button onClick={() => setToValue2(1000)}>thousand</button>
			<button onClick={() => setToValue2(0)}>reset</button>
			<button onClick={() => setToValue2(value + 1)}>increment</button>
			<p>{value}</p>
		</div>
	);
};

export default App;
