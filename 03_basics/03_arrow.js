const user = {
    username : "Aamina",
    price : 999,
    welcomeMessage : function(){            //this refers to current context
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Olive"
// user.welcomeMessage()

//console.log(this);          // output: {}

// function chai(){
//     let username = "Aamina"
//     console.log(this);         //it works in case of objects gives many values, chk output
//     console.log(this.username);    // undefined
// }

//chai()

// const chai = function(){
//     let username = "Aamina"
//     console.log(this.username);
// }

// chai()               //output : undefined

// Arrow function

const chai = () => {
    let username = "Aamina"
    console.log(this.username);         // undefined
    console.log(this);              // {}
}

// chai()

// basic syntax of arrow function: () => {}

// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }

// arrow function with implicit return
//const addTwo = (num1, num2) => num1 + num2

//const addTwo = (num1, num2) => (num1 + num2) // in case of {} we've to use return keyword

//how to return an object
const addTwo = (num1, num2) => ({username: "Aamina"})


console.log(addTwo(2,3))