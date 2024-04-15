// Primitive

// 7 types: String, Number, Boolean, NULL, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 2343434324647878748n

//Reference (Non Primitive)

//Array, Objects, Functions

const heroes = ["ironman", "spiderman", "batman"];
let myObj={
    name: "Aamina",
    age: 24,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log("NULL: "+typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof myObj);
console.log(typeof userEmail);


// +++++++++++++++++++++++++++++++++++++++++++++++

//   Stack (Primitive), Heap (Non-Primitive)

let myOthername = "Olive"
let originalName = myOthername
originalName = "Emily"

console.log(originalName);
console.log(myOthername);

let userOne = {
    email: "user@google.com",
    upi: "user@gpay"
}

let userTwo = userOne

userTwo.email = "aamina@google.com"

console.log(userOne.email);
console.log(userTwo.email);