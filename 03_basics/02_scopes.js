var c = 300     // global scope
let a = 50
if(true){         // {} : block scope
    let a = 10
    const b = 20
    var c = 30          // var is accessible outside the block scope
    console.log("INNER: ",a);
}

//console.log(a);
//console.log(b);
//console.log(c);

// nested scope

function one(){
    const username = "Aamina"
    function two(){
        const website = "GitHub"
        console.log(username);
    }
     //console.log(website);

    two()
}

//one()

// closure also means child function can access parent variable

if (true) {
    const username = "Aamina"
    if (username === "Aamina") {
        const website = " GitHub"
        console.log(username + website);
    }
    // console.log(website);
}

//console.log(username);


//  hoisting

addOne(5)
function addOne(num){
    return num + 1
}




//addTwo(5)         //in this case function can't be  declared before
const addTwo = function(num){
    return num +2
}

