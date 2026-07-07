/* C1. SECOND BIGGEST NUMBER */
 
// Find the SECOND biggest number.

// Do NOT use sort().
 
const numbers1 = [10, 45, 23, 89, 67, 34];
 
// Expected: 67
 
// your code here
 let biggest = numbers1[0];
 let second = numbers1[0];
 for(let i = 0; i < numbers1.length; i++){
    if(numbers1[i] > biggest){
        second = biggest;
        biggest = numbers1[i];
    }
 }
 console.log(second);
/* C2. COUNT DUPLICATES */
 
// Count how many times target appears in the Array.
 
const numbers2 = [5, 2, 7, 2, 9, 2, 4];

const target2 = 2;
let target = 0;
 
// Expected: 3
// your code here

 for(let i = 0; i < numbers2.length; i++){
    if(numbers2[i] === target2){
        target = target + 1;
    }
 }
 console.log(target);

/* C3. REVERSE AN ARRAY */
 
// Print the Array in reverse order.

// Do NOT use reverse().
 
const numbers3 = [10, 20, 30, 40, 50];
 
// Expected:

// 50

// 40

// 30

// 20

// 10
 
// your code here
 for(let i = numbers3.length - 1; i >= 0; i--){
    console.log(numbers3[i]);
 }
 
 
/* C4. FIND THE MISSING NUMBER */
 
// The Array should contain numbers from 1 to 10.

// One number is missing.
 
// Find the missing number.
 
const numbers4 = [1, 2, 3, 4, 5, 7, 8, 9, 10];
let sum = 0;
let missing 
// Expected: 6
 
// your code here
 for(let i = 0; i < numbers4.length; i++){
    sum = sum + numbers4[i];
 }
 missing = 55 - sum;
 console.log(missing);
/* C5. TWO NUMBERS MAKE THE TARGET */
 
// Find TWO numbers whose sum equals the target.
 
const numbers5 = [3, 8, 12, 4, 7];

const target5 = 15;
 
// Expected:

// 3 + 12

// OR

// 8 + 7
 
// Hint:

// You may need a loop inside another loop.
 
// your code here
 for(let i = 0; i < numbers5.length; i++){

 }
 
 
/* C6. REMOVE DUPLICATES */
 
// Create a new Array that contains no duplicate numbers.
 
// You may research:

// push()

// includes()
 
const numbers6 = [1, 2, 2, 3, 4, 3, 5];
 
const uniqueNumbers = [];
 
// Expected:

// [1, 2, 3, 4, 5]
 
// your code here
 
 
 
/* C7. LONGEST WORD */
 
// Find the longest word.
 
const words7 = [

  "cat",

  "javascript",

  "apple",

  "computer",

  "hi"

];
 
let longest = words7[0];
 
// Expected: javascript
 
// your code here
 
 
 
/* C8. COUNT LETTERS */
 
// Count how many times the letter "a" appears.
 
// Hint:

// A String also has .length

// You can access a character using word[i]
 
const word8 = "javascript";

const targetLetter8 = "a";
 
let count8 = 0;
 
// Expected: 2
 
// your code here
 
 
 
/* C9. PALINDROME CHECKER */
 
// Check if the word reads the same forward and backward.
 
// Examples:

// "level" -> true

// "hello" -> false
 
const word9 = "level";
 
let reversedWord = "";
 
// Do NOT use reverse().
 
// Expected: true
 
// your code here
 
 
 
/* C10. NUMBER FREQUENCY */
 
// Find which number appears the MOST times.
 
const numbers10 = [1, 2, 3, 2, 4, 2, 3, 3, 3];
 
// Expected:

// Number: 3

// Count: 4
 
// Hint:

// Compare every number with every other number.
 
// your code here
 