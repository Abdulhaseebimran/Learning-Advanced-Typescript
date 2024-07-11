"use strict";
function sum() {
    var num1 = 10;
    var num2 = 20;
    var result = num1 + num2;
    console.log("Addition result is : " + result);
    return result;
}
// sum(); // calling function
function multiplication(num1, num2) {
    var result = num1 * num2;
    console.log("Multiplication is : " + result);
    return result;
}
// multiplication(10, 20); // calling function with arguments
// program to convert to celsius to fahrenheit
function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9 / 5) + 32;
    console.log("Temperature in Fahrenheit is : " + fahrenheit);
    return fahrenheit;
}
// celsiusToFahrenheit(32); // calling function with arguments
// program to find the factorial of a number
function factorial(num) {
    var fact = 1;
    for (var i = 1; i <= num; i++) {
        fact = fact * i;
    }
    console.log("The factorial of " + num + " is " + fact);
}
// factorial(5); // calling function with arguments
// percentage of a student calculator
function percentageCalculator(marks, totalMarks) {
    var result = (marks / totalMarks) * 100;
    console.log("The percentage is : " + result + "%");
}
// percentageCalculator(450, 500); // calling function with arguments
// Arrow function
var arrowFun = () => {
    console.log("Arrow function is called");
};
// arrowFun();
var arrowFunWithArg = (name) => {
    console.log("Hello " + name);
};
// arrowFunWithArg("John");
var sum1 = (num1, num2) => num1 + num2; // single line arrow function
sum1(10, 20);
