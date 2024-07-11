"use strict";
console.log("Operators and if else statements");
// camelCase
// let firstName = "John";
// pascaleCase
// let FirstName = "John";
var userName = "John";
var fullName = `${userName} Doe`;
// console.log(typeof fullName);
// operators
var num1 = 10;
var num2 = 20;
var result = num1 + num2 - num1 * 2 / 2;
result += 10; // result = result + 10
result -= 10; // result = result - 10
result = 10;
result *= 10; // result = result * 10
// console.log(result + " is the result");
var isGreater = num1 > num2;
// console.log(isGreater);
// if else statements
if (num1 > num2) {
    // console.log(`${num1} is greater than ${num2}`);
}
if (num1 < num2) {
    // console.log(`${num1} is less than ${num2}`);
}
else {
    // console.log(`${num1} is greater than ${num2}`);
}
if (num1 === num2) {
    // console.log(`${num1} is equal to ${num2}`);
}
else if (num1 > num2) {
    // console.log(`${num1} is greater than ${num2}`);
}
else {
    // console.log(`${num1} is less than ${num2}`);
}
// {
//     console.log("Block Scope 1");
// }
// {
//     console.log("Block Scope 2");
// }
// {
//     console.log("Block Scope 3");
// }
// var newResult: boolean = 5 > 4 && 10 > 5 + 3;
// if (newResult) {
//     console.log("This is true");
// } else {
//     console.log("This is false");
// }
// if (2 < 5) {
//     console.log("Parent");
//     if (6 < 1) {
//         console.log("Child");
//         if (25 === 25) {
//             console.log("Grand Child");
//         }
//     }
// }
// Exercise 1
// 1. calculate the area of a rectangle
var length = 10;
var width = 20;
var area = length * width;
// console.log(`The area of the rectangle is ${area}`);
// 2. calculate the volume of cube
var side = 5;
var volume = side * side * side;
// console.log(`The volume of the cube is ${volume}`);
// 3. if a given number is positive, negative or zero
var givenNumber = 10;
// if(givenNumber > 0){
//     console.log(`${givenNumber} is a positive number`);
// }else if(givenNumber < 0){
//     console.log(`${givenNumber} is a negative number`);
// }else{
//     console.log(`${givenNumber} is a zero`);
// }
// 4. if a given is even or odd.
// if (givenNumber % 2 === 0) {
//     console.log(`${givenNumber} is an even number`);
// }else {
//     console.log(`${givenNumber} is an odd number`);
// }
// 5. mathematical expression is ((10 + 5) * 3 - 2) / (4 % 3) - 7).
var expression = ((10 + 5) * 3 - 2) / (4 % 3) - 7;
console.log(`The result of the expression is ${expression}`);
