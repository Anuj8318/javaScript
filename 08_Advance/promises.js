const promise1 = new Promise(function(resolve,reject){
    // Do an asyn task
    // DB calls, cryptographically network
    setTimeout(function()
    {
        console.log('Asyn task us completed');
        resolve();
    },1000);
});

promise1.then(function(){
    console.log('Promise consume ');
})






new Promise(function(resolve,reject){
setTimeout(function(){
    console.log("Asyn task 2");
    resolve();
},1000);
}).then(function(){
    console.log("Asyn 2 resolved");
})



const promise3 = new Promise(function(resolve, reject){
   setInterval(function(){
            resolve({username:"anuj", email: "anuj@gmail.com"})
   },1000)
})
promise3.then(function(user){
    console.log(user);
})


const promise4 = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username:"anuj", password :"123"});
        }
        else
        {
            reject("Error:Something went wrong")
        }
    }, 1000);
})

promise4.then((user)=>{
  console.log(user);
  return user.username;
}).then((username)=>{
  console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
})





const promise5 = new Promise(function(resolve,reject){
 setTimeout(() => {
    let error = true;
    if(!error)
    {
        resolve({username:"abuj", password:"123"})
    }else{
        reject("ERROR: JS went  wrong");
    }
 }, 1000);
});

async function conumePorise5(){
  try {
    const response = await promise5;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

conumePorise5();




// async function getAllUser(){
//          try {
//             const response = await fetch('https://randomuser.me/api/');
//          const data = await response.json();
//          console.log(data);
//          } catch (error) {
//             console.log("E:" ,error);
//          }
// }
//  getAllUser();


fetch('https://randomuser.me/api/')
.then((response)=>{
return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})



