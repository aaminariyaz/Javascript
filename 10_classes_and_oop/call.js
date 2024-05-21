function SetUsername (username){
    // suppose it does complex DB calls
    this.username = username
    console.log("Called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)   // call passes current execution context to another function

    this.email = email
    this.password = password
}

const chai = new createUser('chai', 'chai@fb.com', 1234)
console.log(chai);