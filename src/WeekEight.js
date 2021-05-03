// Monday 3rd May

// Spreed operator: Spread syntax can be used when all elements from an object or array need to be included in a list of some kind. 
// In the above example, the defined function takes x, y, and z as
// arguments and returns the sum of these values. An array value is also defined.

// concat method: The concat function concatenates two or more strings and returns the resulting string.

// Argument: Array-like” means that arguments has a length property and properties indexed from zero, 
// but it doesn't have Array's built-in methods like forEach() or map(). See §Description for details.

// function Firstfun(...args) {
//     let result =[]
//         for (i =0; i < (arguments.length); i++) {
//             result = result.concat(arguments[i]);
//         }

//         return result
//     }

// ES6

// function essixfun(...args){
//     return [].concat(...args)
// }

// // Create a function that takes two functions (number. Length),
// // secondFunc(7,5) => (7, 14, 21, 28, 35)

// function secondFunc(number, length) {
//     let result =[]                           // logic is multiplying i by the length by number choosen, looping with a push function.
//     for (let i = 1; i <= length; i++) {
//         result.push(number * i)
//     } return result
// }

// //console.log

// //ES6
// function esSecondFunc(number, length) {
//     return [...Array(length).keys()].map((e, i) =>(e+ 1) * number)
// } 
// console.log (esSecondFunc(7, 5))
// // create a function that takes an array of numbers and a string, returns an array of number sorted in
// // ascending or descending order.
// //fsortFunc([4,3,2,1], "Ascending") -> [1, 2, 3, 4]
// //fsortFunc([6,7,8,9], "Descending") -> [9, 8, 7, 6]
// //Answer
// function sortFunc(arr,str) {
//     switch (str) {
//         case 'Ascending':
//             return arr.sort((a, b) => a - b)
//             break;
//         case 'Descending':
//             return arr.sort((a, b) => b - a)
//             break;
//         default: return arr
//     }
// }
// console.log(sortFunc([4,3,2,1], 'Ascending'))
// //ES6

// //ES6
// const esSortfunc = (arr, str) => 
// str === 'Ascending' ? arr.sort((a, b) => a - b) :
//     str === 'Descending' ? arr.sort((a, b) => b -a ) :
//         arr

//ES5
//      create a function that returns all params are truthy otherwise return false  

 // const trueOrFalse =(...args) => arges.every(Boolean)
 // creat a function that takes three arguments (x, y, z) and returns and array
 // containing a number of sub arrays each sub array contains items within

 function subArrays(x, y, z) {
     return Array(x).fill(Array(y).fill(z))
 }

 // fill Method: The fill() method changes all elements in an array to a 
 // static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.

 console.log(subArrays(3, 2, 3)) // this printed [3,3],[3,3],[3,3]

 function subways(x, y, z) {
     let i = 0; 
     if (i = 1; i < 1; i++) {
      
     }
     return True  // this is meant to be a return tru false for the answer 
     return false
 }
 console.log(subArrays(1,2,3)) // return 1,2,3,4,5
 console.log(subArrays(1,2,3)) // return 6,7,8,9

