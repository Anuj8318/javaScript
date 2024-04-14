// creating a object literal 
const user={
    username:"anuj",
    loginCount :8,
    singnedIN:true,

   getUnserdeatils: function getuser()
    {
     console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUnserdeatils());



// now we are discusing about the constructor

function user(username,loginCount,isLoggedin){
    this.username = username;
    this.loginCount = loginCount;
    return this;
}


// now we are using new keyword
// jab bhe new keyword use hota hai tab ek naya instance create hota hai matlb ek naya object creat hota hai
// aur ek naya 
const  userone = new user("anuj",12,true)

// get knowledge of the instance keyword 
