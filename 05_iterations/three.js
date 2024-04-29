// for of

const arr = [1, 2, 3, 4, 5, 6, 7]
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    if(greet === " "){
    continue
    }
    // console.log(`Each char is ${greet}`);
}


// Maps

const map = new  Map
map.set('IN' , "India")
map.set('USA' , "United States Of America")
map.set('UK' , "United Kingdom")
map.set('UAE' , "United Arab Emirates")
map.set('UK' , "United Kingdom")

// console.log(map);

for (const key of map) {
    console.log(key);
}

for (const [key,value] of map) {
    console.log(key, ':-',value);
}

const myObj ={
    game1 : "NFS",
    game2 : "Spiderman"
}

// for (const [key,value] of myObj) {
//     console.log(key, ':-',value);
// }

//object is not iterable in (for-of)

