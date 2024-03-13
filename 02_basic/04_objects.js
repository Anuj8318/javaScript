
// this is singleton object 
// const tinderUser1 = new Object();

//   This is not a singleton object
const tinderUser = {}

tinderUser.id = "123abs"
tinderUser.name = "Sammy"
tinderUser.islogedname = true;
// console.log(tinderUser);


// how to declare nesting object 
const regularUser = {
    email: "anuj@gmail.com",
    fullname:{
        username:{
            firstname :"anuj",
            Lastname:"singh"
        }
    }
}

// console.log(regularUser.fullname.username.firstname)



const obj1 = {1:"a",2:"b"}
const obj2= {3:"c",4:"d"}

// combine the two object 
const obj3 = Object.assign({},obj1,obj2)


const obj4 = {...obj1, ...obj2}
// console.log(obj3);


// hoow we extract the key and values from  a object 
// console.log(tinderUser);

//   this is used in the database when we require the keys and values of the object 
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('islogedname'));


// ++++++++++++++++++++++++++++++++++++++++++++++++++ Destructing of the object+++++++++++++++++++++++++++++++

const course ={
    coursename:"js in hindi",
    price:"67",
    courseInstructor :"anuj"
}

const {courseInstructor:instructor} = course;

// console.log(courseInstructor);
console.log(instructor);


// Json structure

// {
//     "name":"anuj",
//     "class":"btech"
// }