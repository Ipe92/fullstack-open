import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistics = (props) => {
	const feedBackAmount = props.good + props.bad + props.neutral;
	const calculateAverage = () => (props.good - props.bad) / feedBackAmount;
	const calculatePositive = () => props.good / feedBackAmount;
	if (props.good === 0 && props.bad === 0 && props.neutral === 0) {
		return (
			<div>
				<h1>statistics</h1>
				<p>No feedback given</p>
			</div>
		);
	} else
		return (
			<div>
				<h1>statistics</h1>
				<p>good {props.good}</p>
				<p>neutral {props.neutral}</p>
				<p>bad {props.bad}</p>
				<p>all {props.good + props.bad + props.neutral}</p>
				<p>average {calculateAverage()}</p>
				<p>positive {calculatePositive()}%</p>
			</div>
		);
};

const App = () => {
	// tallenna napit omaan tilaansa
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<div>
			<h1>Give feedback</h1>
			<Button onClick={() => setGood(good + 1)} text="good" />
			<Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
			<Button onClick={() => setBad(bad + 1)} text="bad" />
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	);
};

export default App;
