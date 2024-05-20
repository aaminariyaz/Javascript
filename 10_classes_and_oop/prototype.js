// let myName = 'Aamina  '

// console.log(myName.length);

let myheros = ['thor' , 'spiderman']

let heroPower = {
    thor : 'hammer',
    spiderman : 'sling',

    getSpiderPower : function(){
        console.log(`spidy power is ${this.spiderman}`);
    }

}

//we'are adding the properties to object directly
//now this property can be accessed by all

Object.prototype.aamina = function(){
    console.log("aamina is present in all objects");
}

Array.prototype.heyAamina = function(){
    console.log("Aamina says hello");
}

// heroPower.aamina()
// myheros.aamina()
// myheros.heyAamina()     //heyAamina() is accessible to array only

// Inheritance

const user = {
    username : 'olive',
    email : 'olive@google.com'
}

const teacher = {
    makeVedio : true
}

const teachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__ : teachingSupport      // __proto__ : references it with teaching support     ,borrows it's all properties
}

teacher.__proto = user      //teacher can access all the properties of user

//this is called prototypical inheritance , but an old approach


// modern syntax
Object.setPrototypeOf( teachingSupport , teacher)   //teaching support gets the access to access the properties of teacher

let anotherUsername = "chaiaurcode    "

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.truelength()
"olive".truelength()
"coffee  ".truelength()