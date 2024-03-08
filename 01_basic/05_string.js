const name = "anuj"

const count = 50

// console.log(name+ count)

console.log(`Heloo my name is ${name} and  my repo count is ${count}`);

const gameName = new String('anuj')

console.log(gameName[0]);

console.log(gameName.length);

console.log(gameName.toUpperCase());  // it doesnot change the original string beacause itis a primitive datatype and in primitive datatype data is pass byvalue 

// charAt is the method which is used to tell at what is the character is present  at that index
console.log(gameName.charAt(2));

// indexOf is the method which is used to tell that index of the character we provide 
console.log(gameName.indexOf('u'));


// last value is not include in the substring method 
const newString = gameName.substring(0,2);
console.log(newString);

const anotherString = gameName.slice(-2,4);
console.log(anotherString);



// Trim is the method in javScript which is used to slice the  whiteSpaces in  the string  from the start as well as  the end also 
const newString1 = "  anuj   "  //for more about eh string go the  mdn docs 
console.log(newString1);

console.log(newString1.trim());


const url = "https://anuj.com"

console.log(url.replace('anuj', 'singh'));


console.log(url.includes('aj'));


// split method 
