// Arrays

const myArr = [1, 2, 3, 4, 5]
const friuts = ["Apple", "Orange", "Grapes", "Melon"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[0]);

// Array Methods

myArr.push(6)
myArr.push(7)
console.log(myArr);
myArr.pop()
console.log(myArr);

myArr.unshift(0)
myArr.unshift(-1)
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(5));
console.log(myArr.indexOf(6));

const newArr = myArr.join()
console.log(newArr);
console.log(typeof newArr);

// Slice , Splice

console.log("A: ",myArr);
const myn1 = myArr.slice(1,4)
console.log(myn1);
console.log("B: ",myArr);

const myn2 = myArr.splice(2,2)    // from index 2 remove two elements
console.log(myn2);
console.log("C: ",myArr);