class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const olive = new User('Olive')
// console.log(olive.createId());   // now after using static it cannot access createId()


//sometimes we don't want to give any method's access to every object which is instantiated from the same class containing that method like  createId() : we use the keyword STATIC for this  , static createId()

class Teacher extends User{
    constructor(username , email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher('iphone', 'i@phone.com')
iphone.logMe()