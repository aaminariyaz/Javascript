// Singleton
//Object.create

// object literals

const mySym = Symbol("key1")
const JsUser = {
    name : "Aamina",
    "full name" : "Aamina-Riyaz",
    [mySym] : "mykey1",
    age : 24,
    location : "Srinagar",
    email : "aamina@gmail.com",
    isLoggedIn : true,
    lastLoginDays : ["Monday" , "Tuesday" , "Friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// //console.log(JsUser.fullname);      //can't access this way 
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "aamina@googlecom"
// console.log(JsUser.email);
// Object.freeze(JsUser)
// JsUser.email = "aamina@outlook.com"
// console.log(JsUser.email);

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello, Js user");
}

console.log(JsUser.greeting());

JsUser.greetingTwo = function() {
    console.log(`Hello Js User ${this.name}`);
}

console.log(JsUser.greetingTwo());

