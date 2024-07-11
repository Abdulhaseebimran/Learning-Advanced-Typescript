function sum ():number {
    var num1: number = 10;
    var num2: number = 20;
    var result: number = num1 + num2;
    console.log("Addition result is : " + result); 
    return result; 
}

// sum(); // calling function

function multiplication (num1:number, num2:number):number{
    var result:number = num1 * num2;
    console.log("Multiplication is : " + result);
    return result;
}

// multiplication(10, 20); // calling function with arguments

// program to convert to celsius to fahrenheit

function celsiusToFahrenheit(celsius:number):number{
    var fahrenheit:number = (celsius * 9/5) + 32;
    console.log("Temperature in Fahrenheit is : " + fahrenheit);
    return fahrenheit;
}

// celsiusToFahrenheit(32); // calling function with arguments

// program to find the factorial of a number

function factorial(num:number){
    var fact:number = 1;
    for(var i=1; i<=num; i++){
        fact = fact * i;
    }
    console.log("The factorial of " + num + " is " + fact);
}

// factorial(5); // calling function with arguments

// percentage of a student calculator

function percentageCalculator (marks:number, totalMarks:number){
    var result = (marks / totalMarks) * 100;
    console.log("The percentage is : " + result + "%");
}

// percentageCalculator(450, 500); // calling function with arguments

// Arrow function

var arrowFun = () => {
    console.log("Arrow function is called");
}

// arrowFun();

var arrowFunWithArg = (name:string) => {
    console.log("Hello " + name);
}

// arrowFunWithArg("John");

var sum1 = (num1:number, num2:number):number => num1 + num2; // single line arrow function

// sum1(10, 20);

// var, let and const

var a:number = 10;
let b:number = 20;
const c:number = 30;


// this is block scope variable
{
  a = 100;
  b = 200; 
  c: 300; // error because const can't be reassigned
  let d:number = 400;   
}

// d:number = 500; // error because d is block scope variable

// function scope variable and local scope variable

function scopeVariable(){
    // this variable is function scope variable or local scope variable
    var a:number = 100;
    let b:number = 200;
    const c:number = 300;
    console.log("a : " + a);
    console.log("b : " + b);
    console.log("c : " + c);
}

// a:number = 10; // in function scope variable we can reassign the value
// b:number = 20; // in function scope variable we can reassign the value
// c:number = 30; // in function scope variable we can't reassign the value
// scopeVariable();