//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Olive"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email : "some@google.com",
    fullname : {
        userfullname :{
            fisrtname : "Olive",
            lastname : "Smith"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.fisrtname);

const obj1 = { 1 : "a" , 2 : "b"}
const obj2  = { 3 : "c" , 4 : "d"}
const obj3 = { 5 : "e" , 6 : "f"}

//const obj4 = {obj1, obj2}
//const obj4 = Object.assign(obj1 , obj2)
//const obj4 =  Object.assign({} , obj1, obj2, obj3)  //{}: target &obj1, obj2, obj3 : source

const obj4 = {...obj1, ...obj2, ...obj3}
//console.log(obj4);

// values from data base come in this way (array of objects)
const user = [
    {
        id : 1,
        email : "user@gmail.com"
    },
    {
    },
    {
    },
    {
    }
]

//values can be accessed as
user[1].email


// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    coursename : "JavaScript",
    price : 999,
    courseInstructor : "Hitesh"
}

//Destructuring of object

//const {courseInstructor} = course
//console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);

// JSON structure (API)
// {
//     "name" : "Hitesh",
//     "coursename" : "Js in Hindi",
//     "price" : "free"
// }


//From API's we can get arrays as well 
[
    {},
    {},
    {}
]
