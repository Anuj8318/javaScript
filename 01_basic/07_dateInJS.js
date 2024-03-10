// Dates 

let myDate = new Date()
// console.log(myDate.toString());

// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let myCreateDate = new Date(2024,0,23,5,6);
// console.log(myCreateDate.toLocaleDateString());

// let mytimeStamp = Date.now();
// console.log(mytimeStamp) // it give the time in the second from the very first 

// to get into minute
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate.getDay())
console.log(newDate.getMonth())
console.log(newDate.getFullYear())

newDate.toLocaleDateString('defalut',{
    weekday:"long"
})

console.log(newDate)