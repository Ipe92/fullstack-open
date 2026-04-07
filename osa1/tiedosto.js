const x = 1;
let y = 5;

console.log(x, y);
y += 10;
console.log(x, y);
y = "teksti";
console.log(x, y);
// x = 4;

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
