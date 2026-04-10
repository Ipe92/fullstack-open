const x = 1;
let y = 5;

console.log(x, y);
y += 10;
console.log(x, y);
y = "teksti";
console.log(x, y);
// x = 4;

// taulukot

const t = [1, -1, 3];
console.log(t.length);
t.push(5);
console.log(t.length);
t.forEach((value) => {
	console.log(value);
});

const t2 = [1, -1, 3];
const t3 = t2.concat(5);

console.log(t2);
console.log(t3);

const t4 = [1, 2, 3];
const m1 = t4.map((value) => value * 2);
console.log(m1);

const m2 = t4.map((value) => "<li>" + value + "</li>");
console.log(m2);

const t5 = [1, 2, 3, 4, 5];
const [first, second, ...rest] = t5;
console.log(first, second);
console.log(rest);

// Oliot

const object1 = {
	name: "Arto Hellas",
	age: 35,
	education: "Filosofian tohtori",
};

const object2 = {
	name: "Full Stack -websovelluskehitys",
	level: "aineopinto",
	size: 5,
};

const object3 = {
	name: {
		first: "Juha",
		last: "Tauriainen",
	},
	grader: [2, 3, 5, 3],
	department: "TKTL",
};

console.log(object1.name);
const fieldName = "age";
console.log(object1[fieldName]);
object1.address = "Tapiola";
object1["secret number"] = 1234;
console.log(object1);

// Funktiot

const sum = (p1, p2) => {
	console.log(p1);
	console.log(p2);
	return p1 + p2;
};

const result = sum(1, 5);
console.log(result);

const square = (p) => {
	console.log(p);
	return p * p;
};

const square2 = (p) => p * p;

const tt = [1, 2, 3];
const tSquared = tt.map((p) => p * p);

function product(a, b) {
	return a * b;
}

const average = function (a, b) {
	return (a + b) / 2;
};

const vastaus = average(2, 5);
