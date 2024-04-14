// for of loop 


const arr = [1,2,3,4]
for (const i of arr) {
    // console.log(i);
}


const  gretting = "hello world"

for(const greet of gretting)
{
    // console.log(`Each char in ${greet}`);
}


// Maps

const map = new Map();
map.set("IN", "India");
map.set("out", "amrica");
map.set("below", "usa");
// console.log(map);

for (const [key , value] of map) {
    // console.log(key ,"->",value);

}


// how to itratein the array 
// for inn loop 

const obj ={
  "one":1,
  "two":2,
  "three":3,
  "four":4
}

for (const key in obj) {
    // console.log(key ,":",obj[key]);
}



// for each loop

const coding  = ["cpp","js","python","swift","c"];
//yaha pe jo function hota hai wo callback function hota hai isliye usla koi naam nhi hota hai 
coding.forEach(function(val){

// console.log(val);
})

// another method to print 

coding.forEach((item)=>{
    // console.log(item);
})


// another method 
function printme(item){
    // console.log(item);
}
coding.forEach(printme)



coding.forEach(function(val,key,coding){
    // console.log(val,key,coding);
})




// here are the eay how to fetch the date from the datbase
const arr1 = [
    {
      langauagename:"en",
      lanaguageFile:"js"
    },
    {
        langauagename:"en",
        lanaguageFile:"js"
    },
    {
        langauagename:"en",
        lanaguageFile:"js"
    }

]
arr1.forEach((item)=>{
  console.log(item.lanaguageFile);
})


