const score = 400
const balance  = new Number(100)
// console.log(balance);
// console.log((score));

// toString is method which convert the number to the String  
// console.log(balance.toString().length);



// tofixed method is used to fixed the value upto what decimal places you want the value 
// console.log(balance.toFixed(2));



// toPrecision is  method which is precise the value upto which we give in the braces 
const otherNumber = 123.3893
// console.log(otherNumber.toPrecision(3));


const hundereds = 100000
// console.log(hundereds.toLocaleString('en-IN'));


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math);

console.log(Math.abs(-4));

console.log(Math.round(4.5));

console.log(Math.ceil(4.3));


console.log(Math.min(4,3,5,7));
console.log(Math.max(4,3,5,7));

console.log(Math.ceil(Math.random()*100)); 



// here the some formula to find the random number between the min and max value 

const min = 10
const max  = 20

console.log(Math.floor(Math.random() * (max-min+1)) + min);