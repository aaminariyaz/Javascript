const myObject = {
    js : "javascript",
    py : "python",
    rb : "ruby",
    cpp : "c++",
    java : "java"
}

// for (const key in myObject) {
//     console.log(key);
// }

for (const key in myObject) {
    //console.log(`${key} is shortcut for ${myObject[key]}`);
}

const programming = ["java" , "python" , "javaScript" , "C++"]
// for (const key in programming) {
//     console.log(key);
// }


//printing values as for-in loop gives keys
for (const key in programming) {
    console.log(programming[key]);
}


// const map = new  Map
// map.set('IN' , "India")
// map.set('USA' , "United States Of America")
// map.set('UK' , "United Kingdom")
// map.set('UAE' , "United Arab Emirates")
// map.set('UK' , "United Kingdom")

// for (const key in map) {
//     console.log(key);
// }

//not iterable