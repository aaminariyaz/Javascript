class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME: ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}

const chai = new Teacher('chai', 'chai@examole.com', '4567')

chai.addCourse()
chai.logMe()

const masalaChai = new User('masalaChai')
masalaChai.logMe()
//masalaChai.addCourse()    // it does not have access to method addCourse()

console.log( chai === masalaChai)        //false
console.log( chai === Teacher)          //false

console.log( chai instanceof Teacher)
console.log(chai instanceof User);
console.log( masalaChai instanceof User);