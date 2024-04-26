// Immediately Invoked Function Expressions (IIFE)
//An IIFE (Immediately Invoked Function Expression) in JavaScript is a way to execute a function right after it's defined. It's a self-contained block of code that runs immediately after it's created. 
// One main use of an IIFE is to encapsulate variables within a local scope. This helps prevent polluting the global scope with variables that are only needed within a specific context.

(function chai(){
    //named iife
    console.log(`DB connected`);
})();

( (name) =>{
    console.log(`DB connected two ${name}`);
})("MongoDB");
