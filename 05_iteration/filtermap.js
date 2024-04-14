const coding =["js","python","java","cpp"]
// here is the concept that for each loop canoot return anythings 

const values = coding.forEach((item)=>{
//   console.log(item);
  return item;
})

// console.log(values);



// ++++++++++++++++++++++++++++++++++++++++++++++++
// FILTER
const myNums=[1,2,3,4,5,6,7,8,9]

 const newNumns=myNums.filter((num)=>num>4   ) // here condition is given and the filter return the value 
//  agar scope open krenge to humne return keyword ka use krna padega agar nahi to anhi krna padega 
console.log(newNumns);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
const mynus = [1,2,3,4,4,'e',55,4,33,2,,4]
 const newnum = mynus.map((num)=>num+10)
console.log(newnum);


// here we can use the chaining method to the array 


const newNUMS = mynus
               .map((nums)=>nums+10)
               .map((nums)=>nums+1)
               .filter((nums)=>nums>10)


               console.log(newNUMS);



// here we can dicuss about the reduce value 
