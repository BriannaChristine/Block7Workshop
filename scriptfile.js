/*Pseudocode 
1. Create a string variable called "message" and assign it the value "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"
2. Create  3 variables called code1, code2, and code3 with the 
*/
//Create  3 variables called code1, code2, and code3//
const combination = {
  code1: 5 + 5,
  code2: 20 * 2,
  code3: 39 - 1,
};
const message = `You have received this message because you have been chosen to open an important vault. Here is the secret combination: ${combination.code1} ${combination.code2} ${combination.code3}`;
console.log(message);
