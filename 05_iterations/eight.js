const myNums = [1, 2, 3, 4, 5]

// const myTotal = myNums.reduce(function(acc , currval){
//     return acc + currval
// }, 0)

// const myTotal = myNums.reduce(function(acc , currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc,currval) => acc + currval, 0)

//console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price : 1999
    },
    {
        itemName : "python course",
        price : 2999
    },
    {
        itemName : "mobile dev course",
        price : 4999
    },
    {
        itemName : "data science course",
        price : 5999
    }
]

const PriceToPay = shoppingCart.reduce((acc, item) => acc + item.price , 0)
console.log(PriceToPay);