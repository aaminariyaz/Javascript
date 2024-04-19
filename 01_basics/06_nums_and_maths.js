const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 2378.678432
console.log(otherNumber.toPrecision(3));

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++ Maths +++++++++++++++++
console.log(Math);
console.log(Math.abs(-7));
console.log(Math.round(5.6));
console.log(Math.floor(4.9));
console.log(Math.ceil(9.1));
console.log(Math.min(2,-8,3,1,0,4));
console.log(Math.max(6,3,9,10,0,2));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1));

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min );
