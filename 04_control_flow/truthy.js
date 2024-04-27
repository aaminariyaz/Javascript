const userEmail = " "

// if (userEmail) {
//     console.log("Got user email");
// } else {
//    console.log("User email not present"); 
// }

// falsy values
// false , 0 , -0 , "" , null , undefined , NaN , BigInt 0n

// truthy values
//"false" , "0" , "null" , function(){}, " " , [] , {}

// to check array
const arr1 = []
if(arr1.length === 0){
    console.log("Array is empty");
}

// to check object
const obj = {}
if (Object.keys(obj).length === 0) {
    console.log("Object is empty");
}

// false == 0  : true
// false == '' : true
//0 == ''      : true


// Nullish Coalescing Operator (??): null undefined ( works only on these)
let val1;
//val1 = 10 ?? 5               // 10
// val1 = null ?? 15            // 15
// val1 = undefined ?? 40           //40
val1 = null ?? 20 ?? 30             // 20


console.log(val1);

// Ternary operator
// condition ? true : false
const teaPrice = 100
 teaPrice < 50 ? console.log("Purchase") : console.log("Don't purchase");
