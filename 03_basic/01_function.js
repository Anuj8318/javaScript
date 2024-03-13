

function sayMyname(){
    console.log("h");
    console.log("h");
    console.log("h");
    console.log("h");
    console.log("h");
    console.log("h");
    
}

// sayMyname  // reference 

// sayMyname() //exection


// function add(a,b){
//     console.log(a+b);
// }
//   add(6,4);


// we can store the value of the function in the variable 
// function add(a,b){
//    console.log(a+b);
// }
//  const sum =  add(5,6) // when we print  this will give us undefined becoz we cannot return any vaue from the function


function add(a,b){
    return (a+b);
}
 const sum =  add(5,6)
//  console.log(sum);


function loginUserMessage(unsername ="abhi"){
    if(!unsername)
    {
        cconsole.log("no user found")
        return
    }
    return `${unsername} just logged in `
}

console.log(loginUserMessage("anuj"));
console.log(loginUserMessage());