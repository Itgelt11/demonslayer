// E2. Print all names.
//
// Print every name.
//
// Expected:
// Bat
// Sara
// John
// Anu
 
const names2 = ["Bat", "Sara", "John", "Anu"];
 
// your code here
 for(let i = 0; i < names2.length; i++){
    console.log(names2[i]);
 }
 
 
// E3. Print the first value.
//
// Print the first color.
//
// Expected: red
 
const colors3 = ["red", "blue", "green", "yellow"];
 
// your code here
 console.log(colors3[0]);
 
 
// E4. Print the last value.
//
// Print the last fruit.
//
// Do NOT write fruits4[3].
// Use .length.
//
// Expected: grape
 
const fruits4 = ["apple", "banana", "orange", "grape"];
 
// your code here
 console.log(fruits4[fruits4.length - 1]);
 
 
// E5. Print numbers greater than 10.
//
// Print only numbers greater than 10.
//
// Expected:
// 12
// 20
 
const numbers5 = [5, 12, 8, 20, 3];
 
// your code here
 for(let i = 0; i < numbers5.length; i++){
    if(numbers5[i] > 10){
        console.log(numbers5[i]);
    }
 }
 
// M1. Print even numbers.
//
// Print only even numbers.
//
// Expected:
// 12
// 8
// 20
 
const numbers6 = [5, 12, 8, 3, 20, 7];
 
// your code here
 for(let i = 0; i < numbers6.length; i++){
    if(numbers6[i] % 2 ===0){
        console.log(numbers6[i]);
    }
 }
 
 
// M2. Print passed scores.
//
// A student passes if the score is 60 or higher.
//
// Print only passed scores.
//
// Expected:
// 80
// 67
// 95
 
const scores7 = [45, 80, 67, 30, 95, 55];
 
// your code here
 for(let i = 0; i < scores7.length; i++){
    if(scores7[i] >= 60){
        console.log(scores7[i]);        
    }
 }
 
 
// M3. Count passed students.
//
// Count how many students passed.
//
// Passing score: 60 or higher.
//
// Expected: 3
 
const scores8 = [45, 80, 67, 30, 95, 55];
 
let passed8 = 0;
 
// your code here
 for(let i = 0; i < scores8.length; i++){
    if(scores8[i] >= 60){
        passed8 = passed8 + 1;      
    }
     }
      console.log(passed8);
 
// M4. Find the total.
//
// Find the total of all numbers.
//
// Expected: 50
 
const numbers9 = [5, 10, 15, 20];
 
let total9 = 0;
 
// your code here
 for(let i = 0; i <numbers9.length; i++){
    total9 = total9 + numbers9[i];
 }
 console.log(total9);
 
// M5. Count even numbers.
//
// Count how many even numbers are in the Array.
//
// Expected: 3
 
const numbers10 = [5, 12, 8, 3, 20, 7];
 
let evenCount10 = 0;
 
// your code here
 for(let i = 0; i < numbers10.length; i++){
    if(numbers10[i] %2 === 0 ){
        evenCount10 = evenCount10 + 1;
    }
 }
 console.log(evenCount10);
 
// H1. Find the biggest number.
//
// Find the biggest number.
//
// Expected: 30
 
const numbers11 = [5, 12, 8, 30, 20];
 
let biggest11 = numbers11[0];
 
// your code here
 for(let i = 0 ; i < numbers11.length; i++){
    if(numbers11[i] > biggest11){
      biggest11 =  numbers11[i] ;       
    }
 }
 console.log(biggest11);
 
 
// H2. Find the smallest number.
//
// Find the smallest number.
//
// Expected: 8
 
const numbers12 = [15, 12, 8, 30, 20];
 
let smallest12 = numbers12[0];
 
// your code here
 for(let i = 0; i < numbers12.length; i++){
    if(numbers12[i] < smallest12){
        smallest12 = numbers12[i]
    }
 }
 console.log(smallest12);
 
// H3. Count PASS and FAIL.
//
// Passing score: 60 or higher.
//
// Count passed students.
// Count failed students.
//
// Expected:
// Passed: 4
// Failed: 3
 
const scores13 = [45, 80, 67, 30, 95, 55, 72];
 
let passed13 = 0;
let failed13 = 0;
 
// your code here
 for(let i = 0; i < scores13.length; i++){
    if(scores13[i] >= 60){
        passed13 = passed13 + 1;
    }
    else{
        failed13 = failed13 + 1;
    }
 }
 console.log(passed13);
 console.log(failed13);
 
// H4. Find the total of even numbers.
//
// Add ONLY even numbers.
//
// Expected: 40
 
const numbers14 = [5, 12, 8, 3, 20, 7];
 
let total14 = 0;
 
// your code here
 for(let i = 0; i < numbers14.length; i++){
    if(numbers14[i] % 2 === 0){
        total14 = total14 + numbers14[i];
    }
 }
 console.log(total14);
 
// H5. Student score report.
//
// Find:
//
// 1. Passed students count
// 2. Failed students count
// 3. Total score
//
// Passing score: 60 or higher.
//
// Expected:
// Passed: 4
// Failed: 3
// Total: 444
 
const studentScores15 = [45, 80, 67, 30, 95, 55, 72];
 
let passed15 = 0;
let failed15 = 0;
let total15 = 0;
 
// your code here




/* ========================= CHALLENGE ========================= */
 
 
