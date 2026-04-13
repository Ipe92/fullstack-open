const Hello = ({ name, age }) => {
	const bornYear = () => new Date().getFullYear() - age;
	return (
		<div>
			<p>
				Hello {name}, you are {age} years old
			</p>
			<p>So you were probably born {bornYear()}</p>
		</div>
	);
};

const Footer = () => {
	return (
		<div>
			greeting app created by
			<a> ipe92</a>
		</div>
	);
};

const App = () => {
	const nimi = "Pekka";
	const ika = 10;

	const friends = [
		{ name: "Leevi", age: 4 },
		{ name: "Venla", age: 10 },
	];
	console.log("Friends", friends);

	return (
		<>
			<h1>Greetings</h1>
			<Hello name="Maya" age={26 + 10} />
			<Hello name={nimi} age={ika} />
			<Footer />
			<p>
				{friends[0].name} {friends[0].age}
			</p>
			<p>
				{friends[1].name} {friends[1].age}
			</p>
		</>
	);
};

export default App;
