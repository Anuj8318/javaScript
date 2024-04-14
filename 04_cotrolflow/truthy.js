// there are some value in the js which is which is always true and false
// hence 
// falsy value 
// false,0,-0,BigInt 0n,"",null,undefinedm NaN 

// truthy value 
// " ", "false"," ", [],{},fucntion(){}


 const useremail = "anuj@gmail.com";

 if(useremail.length==0){
    console.log("Arryay is emppty ")
 }else{
    console.log("array is not empty")
 }


 const emptyObj ={}
 if(Object.keys(emptyObj).length==0){
    console.log("Object is empty ")
 }



//  Nullish Coaleshing Opertor (??): null undefind

let val1;
// val1=5??10;

var1 = undefined?? 15


val1 = null??10;
console.log(val1)



// Terniary opertor 

// condition ? true :false
