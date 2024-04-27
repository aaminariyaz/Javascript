// if

// const temperature = 41
// if ( temperature === 40) {
//     console.log("Less than 41");
// }
// else{
//     console.log("Temperature is greater than 41 ");
// }
// console.log("Executed");

// < , > , <= , >= , != , == , === , !==

// const score = 200

// if(score >100){
//     const power = "fly"
//     console.log(`User power: ${power}`);

// }
//console.log(`User power: ${power}`);     // can't be accessed outside function

// const balance = 100
// if(balance < 500) console.log("Fail"),console.log("Work Hard");     //not good practice to  write two statements, one is fine

// const balance = 1000
// if(balance < 500){
//     console.log("Less than 500");
// }
// else if(balance < 750){
//     console.log("Less than 750");
// }
// else if(balance < 900){
//     console.log("Less than 900");
// }
// else{
//     console.log("Less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = false

if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
}