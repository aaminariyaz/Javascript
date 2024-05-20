const user = {
    username : 'Aamina',
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        // console.log('Got user details from database');
        // console.log(`Username : ${this.username}`);
        console.log(this);
    }
}


// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this);              // {}



// Constructor function (new)
// new : makes multiple instances from one object literal (creates new context)

// const promiseOne = new Promise()
// const newDate = new Date()


function User (username, loginCount, isloggedIn ){
    this.username = username
    this.loginCount = loginCount
    this.isloggedIn = isloggedIn
    
    this.greeting = function(){
        console.log(`Welcome , ${this.username}`);
    }

    return this    //values are returned implicitly inspite of writing return
}

// const userOne = User('aamina',  9 , true)
// const userTwo = User('asiya' , 12 , false)    //here it overwrites the values off userOne

const userOne = new User('aamina',  9 , true)
const userTwo = new User('asiya' , 12 , false)     //using new, it gets new instance
// console.log(userOne);
// console.log(userTwo);

console.log(userOne.constructor);    //[Function: User]
