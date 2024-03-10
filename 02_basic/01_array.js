// Array

const myArray = [0,4,3,3,2,22];

// javaScript array is adjustable and it store multiple type of data into it 
// console.log(myArray[0]);



// ARRAY methods operation


//  -> The push method is  add value in the last of the array 
// myArray.push(6)
// myArray.push(5)
// myArray.push(7)

// -> this pop method remove value from the last of the array 
// myArray.pop()


// this method add the value in the first place of the array 
// myArray.unshift(8)
// myArray.shift()


// these are the those data type which give the value  in the true and false or these are the question type method in array
// console.log(myArray.includes(9));
// console.log(myArray.indexOf(3));



// const newArray = myArray.join();   // this give the value in the string 



// slice ,splice

// Slice  doesnot include the the last point and also doesnot affect  the original array
// whereas Splice include the last point and also affect he original array 

console.log("A",myArray);
const myA1 = myArray.slice(1,3);

console.log("B",myArray);


const myA2 = myArray.splice(1,3);
console.log("c",myArray);




// console.log(myArray);
// console.log(newArray); 