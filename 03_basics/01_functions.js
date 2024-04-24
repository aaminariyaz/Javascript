function sayMyName(){
    console.log("A");
    console.log("A");
    console.log("M");
    console.log("I");
    console.log("N");
    console.log("A");
}

//sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    // console.log("Done");
    return number1 + number2
}

const result = addTwoNumbers(5,8)
//console.log("Result: ", result);

//in Js ""  and undefined are considered as false

function loginUserMessage(username){
    if(!username){            // (username === undefined) isEqualto (!username)
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Aamina"));
//console.log(loginUserMessage(""));   //just logged in
//console.log(loginUserMessage());     // undefined just logged in

function loginUserMessage2(username ="Sam"){
    if(!username){            // to avoid this situation we can use default value
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage2()); 



function calculateCartPrice(val1,val2,...num){
    return num                   // ... : rest operator (used to take  multiple parameters)
}

//console.log(calculateCartPrice(200, 400, 600, 300, 500));   //200 & 400 goes to val1 & val2 

//passing object to function

const user ={
    username : "Aamina",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)


//another way
handleObject({
   
    username: "Olive",
    price : 200
})

//passing array

const myNewArray = [100, 300, 400, 500, 600,450]

function returnSecondvalue(getArray){
    return getArray[1]
}

//console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([100, 600, 200, 300]));