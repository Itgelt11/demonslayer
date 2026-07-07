// E1. Create a function that prints "Hello JavaScript".
//
// Expected:
// Hello JavaScript
 
function sayHello(text) {
  // your code here
   console.log(text);
}
 
sayHello("Hello JavaScript");
 
 
// E2. Create a function that prints the given name.
//
// Example:
// greet("Bold")
// Expected: Hello Bold
 
function greet(name) {
  console.log("Hello " + name);
}
 
greet("Bold");
 
 
// E3. Create a function that returns the sum of two numbers.
//
// Example:
// add(5, 3)
// Expected: 8
 
function add(a, b) {
    return a + b;
}
 
console.log(add(5, 3));
 
 
// E4. Create a function that returns the square of a number.
//
// Example:
// square(5)
// Expected: 25
 
function square(number) {
  // your code here
  return number * number;
}
 
console.log(square(5));
 
 
// E5. Create a function that converts minutes to seconds.
//
// Example:
// toSeconds(5)
// Expected: 300
 
function toSeconds(minutes) {
  // your code here
  return minutes * 60;
}
 
console.log(toSeconds(5));
 
 
// E6. Create a function that returns true if the number is positive.
//
// Example:
// isPositive(5)  -> true
// isPositive(-2) -> false
 
function isPositive(number) {
  // your code here
  return number > 0 ; 
}
 
console.log(isPositive(5));
 
 
// E7. Create a function that returns the bigger number.
//
// Example:
// getBigger(10, 7)
// Expected: 10
 
function getBigger(a, b) {
  // your code here
  if(a > b){
    return a;
  }
  else{
    return b;
  }
}
 
console.log(getBigger(10, 7));
 
 
/* ========================= MEDIUM ========================= */
 
// M1. Create a function that returns "Even" or "Odd".
//
// Example:
// checkNumber(8) -> Even
// checkNumber(5) -> Odd
 
function checkNumber(number) {
  // your code here
  if(number % 2 === 0){
    return "Even";
  }
  else{
    return "Odd";
  }
}
 
console.log(checkNumber(8));
 
 
// M2. Create a function that returns a grade.
//
// 90-100 -> A
// 80-89  -> B
// 70-79  -> C
// 60-69  -> D
// below 60 -> F
 
function getGrade(score) {
  // your code here
  if(score >= 90){
    return "A";
  }
  else if(score >= 80){
    return "B";
  }
  else if(score >= 70){
    return "C";
  }
  else if(score >= 60){
    return "D";
  }
  else{
    return "F";
  }
}
 
console.log(getGrade(85));
 
 
// M3. Create a function that returns the sum from 1 to n.
//
// Example:
// sumTo(5)
// 1 + 2 + 3 + 4 + 5
// Expected: 15
 
function sumTo(n) {
  // your code here
  let sum = 0;
  for(let i = 1; i <= n; i++){
    sum = sum + i;
  }
  return sum;
}
 
console.log(sumTo(5));
 
 
// M4. Create a function that counts from 1 to n.
//
// Example:
// countTo(5)
//
// Expected:
// 1
// 2
// 3
// 4
// 5
 
function countTo(n) {
  // your code here
  for(let i = 1; i <= n; i++){
    console.log(i);
  }
}
countTo(5);
 
 
// M5. Create a function that returns the factorial of a number.
//
// Example:
// factorial(5)
// 5 * 4 * 3 * 2 * 1
// Expected: 120
 
function factorial(number) {
  // your code here
  let result = 1;
  for(let i = 1; i <= number; i++){
    result = result * i;
  }
  return result;
}
 
console.log(factorial(5));
 
 
// M6. Create a function that counts even numbers from 1 to n.
//
// Example:
// countEven(10)
//
// Even numbers: 2, 4, 6, 8, 10
// Expected: 5
 
function countEven(n) {
  // your code here
  let count = 0;
  for(let i = 1; i <= n; i++){
    if(i % 2 === 0){
        count = count + 1;
    }
  }
  return count;
}
 
console.log(countEven(10));
 
 
// M7. Create a function that returns the largest number in an array.
//
// Do NOT use Math.max()
//
// Example:
// findMax([4, 8, 2, 10, 3])
// Expected: 10
 
function findMax (numbers) {
  // your code here
  let largest = numbers[0];
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > largest){
        largest = numbers[i];
    }
  }
  return largest;
}
 
console.log(findMax([4, 8, 2, 10, 3]));
 
 
// M8. Create a function that returns the sum of all numbers in an array.
//
// Example:
// sumArray([2, 4, 6])
// Expected: 12
 
function sumArray(numbers) {
  // your code here
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
    sum = sum + numbers[i];
  }
  return sum;
}
 
console.log(sumArray([2, 4, 6]));
 
 
/* ========================= HARD ========================= */
 
// H1. Create a function that returns how many positive numbers
// are in the array.
//
// Example:
// countPositive([-2, 5, 3, -1, 0, 8])
// Expected: 3
 
function countPositive(numbers) {
  // your code here
  let count = 0;
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 0){
        count = count + 1;
    }
  }
  return count;
}
 
console.log(countPositive([-2, 5, 3, -1, 0, 8]));
 
 
// H2. Create a function that returns only even numbers.
//
// You can use push().
//
// Example:
// getEvenNumbers([1, 2, 3, 4, 5, 6])
// Expected: [2, 4, 6]
 
function getEvenNumbers(numbers) {
  // your code here
  let evens[]
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        evens.push(numbers[i]);
    }
  }
  return evens[];
}
 
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));
 
 
// H3. Create a function that returns the smallest number in an array.
//
// Do NOT use Math.min()
//
// Example:
// findMin([8, 3, 10, 1, 6])
// Expected: 1
 
function findMin(numbers) {
  // your code here
  let smallest = numbers[0];
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] < smallest){
        smallest = numbers[i];
    }
  }
  return smallest;
}
 
console.log(findMin([8, 3, 10, 1, 6]));
 
 
// H4. Create a function that returns the average of an array.
//
// Example:
// getAverage([10, 20, 30, 40])
// Expected: 25
 
function getAverage(numbers) {
  // your code here
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
    sum = sum + numbers[i];
  }
  return sum / numbers.length;
}
 
console.log(getAverage([10, 20, 30, 40]));
 
 
// H5. Create a function that returns the number of vowels in a string.
//
// Vowels: a, e, i, o, u
//
// Example:
// countVowels("javascript")
// Expected: 3
 
function countVowels(text) {
  // your code here

}
 
console.log(countVowels("javascript"));
 
 
// H6. Create a function that returns a reversed array.
//
// Do NOT use reverse().
//
// Example:
// reverseArray([1, 2, 3, 4])
// Expected: [4, 3, 2, 1]
 
function reverseArray(numbers) {
  // your code here
  for(let i = numbers.length - 1; i >= 0; i--){
    return numbers[i];
  }
}
 
console.log(reverseArray([1, 2, 3, 4]));
 
 
// H7. Create a function that returns the second largest number.
//
// Do NOT use sort().
//
// Example:
// findSecondLargest([5, 8, 2, 10, 7])
// Expected: 8
 
function findSecondLargest(numbers) {
  // your code here
}
 
console.log(findSecondLargest([5, 8, 2, 10, 7]));
 
 
// H8. Create a function that checks if a number is prime.
//
// A prime number can only be divided by 1 and itself.
//
// Example:
// isPrime(7)  -> true
// isPrime(10) -> false
 
function isPrime(number) {
  // your code here

}
 
console.log(isPrime(7));