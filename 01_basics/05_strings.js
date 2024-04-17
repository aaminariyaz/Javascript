const name = "Aamina"
const repoCount = 40

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const nickName = new String('Mehak-Jan-com')
console.log(nickName[0]);
console.log(nickName.__proto__);
console.log(nickName.length);
console.log(nickName.toUpperCase());
console.log(nickName.charAt(3));
console.log(nickName.indexOf('a'));

const newString = nickName.substring(0,2)
console.log(newString);

const anotherString = nickName.slice(-8,5)
console.log(anotherString);

const stringOne = "   Aamina   "
console.log(stringOne);
console.log(stringOne.trim());

const url = "https://aamina.com//aamina20%riyaz"
console.log(url.replace('20%', '-'));
console.log(url.includes('mehak'));

console.log(nickName.split('-'));