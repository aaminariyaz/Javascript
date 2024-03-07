const accountId = 23456
let accountEmail = "aamina@google.com"
var accountPassword = "23490"
accountCity = "Kashmir"
let accountState;

// accountId = 2 //not allowed

accountEmail = "abc@gmail.com"
accountPassword = "34560"
accountCity = "jammu"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])