// in this lecture we are dicussing about  the object 

// when we create  the object from the constructor then  object is make by singleton 
// other wise literal se nahi  banta hai 


// object literal  this is how we decalre the object in java script  
const JsUser = {
    name :"anuj",
    age:23,
    location:"jaipur",
    email:"anuj@gmail.com"
}

// how we fetch the value in js 
//  there is two ways we can access value from the objects 
//console.log(JsUser.email);
//console.log(JsUser["email"]);  // we can access the value from the objects when we decalare string in object like{ "name" : "anuj"}


// how to decalre  symbol  int he obejct 
// Question is  decalre a symbol and print it from the object
const sym = Symbol("key1");
const user ={
  [sym] :"keychange",
  name :"anuj"
  }

 // console.log(user[sym]);


  // how we ovverwrite the value 
  JsUser.age = 89
//console.log(JsUser.age);
// how we can freeze the value in the object 
//Object.freeze(JsUser)
JsUser.age = 78
//console.log(JsUser.age);

// creating a fucntion in javascript 
JsUser.helo = function(){
 console.log("hwll0 fuction")
 }


 JsUser.helo2 = function(){
 console.log(`hello second fucntion ${this.location}`);
 }
 console.log(JsUser.helo);
 console.log(JsUser.helo());
 console.log(JsUser.helo2());

