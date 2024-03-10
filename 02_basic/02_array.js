const marverHeros = ["thor", "Ironman","captain"]

const dcheros = ["superman","flash","batman"]


// this push opertion push the second array as an element so this  is not the good practice for this 
//   marverHeros.push(dcheros);

// console.log(marverHeros);


// istead of doing the push opertion  we will use  the concat method to join the two  array
// const allHeros=  marverHeros.concat(dcheros)
// console.log(allHeros);

// spread opertion in the 
// const all_heros = [...marverHeros ,...dcheros]

// console.log((all_heros));


const another_array =[2,2,42,14,4,4,4,[4,5,6],3,43,[24.3543,4,[456,"anuj",4,2]]]
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array)




// we can use this while doing data scraping
console.log(Array.isArray("Anuj"));

console.log(Array.from("anuj"));

console.log(Array.from({name:"anuj"}));  // intresting case in the interview



// this is used for converting the give variable into the array 
let score1 = 100
let score2 = 200
let score3 = 400
console.log(Array.of(score1,score2,score3));