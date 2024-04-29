//for- each

const coding = ["swift", "ruby", "python" , "javascript" , "java"]
// coding.forEach( function(val){
//     console.log(val);
// })

// coding.forEach( item => {
//     console.log(item);
// });

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

//printing array and index
// coding.forEach(( item , index, arr) => {
//     console.log(item,index,arr);
// });

const myCoding = [
    {
        languagename : "javaScript",
        languageFileName : "js"

    },
    {
        languagename : "java",
        languageFileName : "java"

    },
    {
        languagename : "python",
        languageFileName : "py"

    },
    {
        languagename : "ruby",
        languageFileName : "rb"

    }
]

myCoding.forEach(item => {
    console.log(item.languagename);
});