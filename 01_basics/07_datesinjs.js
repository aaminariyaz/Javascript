// Dates

let myDate = new Date()
// console.log(myDate);  // 2024-04-19T09:41:57.153Z
// console.log(myDate.toString());        // Fri Apr 19 2024 09:41:57 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());    //Fri Apr 19 2024
// console.log(myDate.toLocaleString());   // 4/19/2024 , 9:41:57 AM
// console.log(myDate.toLocaleDateString());  //4/19/2024
// console.log(myDate.toLocaleTimeString());  //9:41:57 AM

//console.log(typeof(myDate));

//let myCreatedDate = new Date(2024 ,3, 19)  //months start from 0
//console.log(myCreatedDate.toDateString());

//let myCreatedDate = new Date(2024, 4, 24, 6, 7)
//console.log(myCreatedDate.toLocaleString());

//let myCreatedDate = new Date("2024-09-17")              //yy-mm-dd
let myCreatedDate = new Date("11-19-2024")               //mm-dd-yy
//console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));   //   (/1000):to convert in terms of seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() +1);       // (+1): to get exact month
console.log(newDate.getDay());

console.log(`The day is ${newDate.getDay()} and the time is ${newDate.toLocaleTimeString()}`);

newDate.toLocaleString('default', {
    weekday:"long"
})

