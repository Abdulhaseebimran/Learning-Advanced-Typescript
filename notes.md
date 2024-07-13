## Learning Advanced TypeScript Concepts with Examples

### Compile TypeScript to JavaScript

To compile TypeScript code to JavaScript, you can use the TypeScript compiler (tsc) from the command line. Here's how you can install the TypeScript compiler using npm:

```bash
npm install -g typescript

tsc --version

tsc filename.ts // Compile TypeScript file to JavaScript

node filename.js // Run JavaScript file

tsc filename.ts --watch // Watch mode

tsc --init // Generate tsconfig.json file

npm init -y // Initialize npm project

npm install typescript --save-dev // Install TypeScript as a dev dependency

npm install @types/node --save-dev // Install TypeScript types for Node.js

npm install ts-node --save-dev // Install ts-node to run TypeScript files directly
```

### 1. Introduction

TypeScript is a superset of JavaScript that provides optional static typing, interfaces, and classes. It is a powerful tool that helps developers write more reliable and maintainable code. In this article, we will explore some advanced TypeScript concepts with examples to help you take your TypeScript skills to the next level.

### 2. Variables and Types

TypeScript provides several built-in types such as number, string, boolean, object, array, tuple, enum, any, void, and null. Let's take a look at some examples of using these types in TypeScript.

```typescript

--Example code goes here--

var num: number = 10;
var str: string = "Hello, TypeScript!";
var bool: boolean = true;
var obj: object = { name: "John", age: 30 };
var arr: number[] = [1, 2, 3, 4, 5];
var tuple: [string, number] = ["John", 30];
enum Color { Red, Green, Blue };
var color: Color = Color.Red;
var anyType: any = "Hello, TypeScript!";
var voidType: void = undefined;
var nullType: null = null;

```

In the above example, we have declared variables of different types in TypeScript. The number type is used for numeric values, the string type is used for text values, the boolean type is used for true/false values, the object type is used for objects, the array type is used for arrays, the tuple type is used for fixed-length arrays with specific types, the enum type is used for a set of named constants, the any type is used for any type of value, the void type is used for functions that do not return a value, and the null type is used for null values.

### 3. Operators and Expressions

TypeScript supports various operators such as arithmetic operators, comparison operators, logical operators, bitwise operators, assignment operators, and conditional operators. Let's take a look at some examples of using these operators in TypeScript.

```typescript

--Example code goes here--

var num1: number = 10;
var num2: number = 20;

var sum: number = num1 + num2;  // 30
var difference: number = num1 - num2; // -10
var product: number = num1 * num2; // 200
var quotient: number = num1 / num2; // 0.5
var remainder: number = num1 % num2; // 10

var isEqual: boolean = num1 == num2; // false
var isNotEqual: boolean = num1 != num2; // true
var isGreater: boolean = num1 > num2; // false
var isLess: boolean = num1 < num2; // true
var isGreaterOrEqual: boolean = num1 >= num2; // false
var isLessOrEqual: boolean = num1 <= num2; // true
var isLogicalAnd: boolean = true && false; // false
var isLogicalOr: boolean = true || false; // true
var isLogicalNot: boolean = !true; // false
var bitwiseAnd: number = num1 & num2; // 0
var bitwiseOr: number = num1 | num2; // 30
var bitwiseXor: number = num1 ^ num2; // 30
var bitwiseNot: number = ~num1; // -11 or -num1-1
var leftShift: number = num1 << 1;   // 20
var rightShift: number = num1 >> 1; // 5
var unsignedRightShift: number = num1 >>> 1; // 5

var assignment: number = 10; 
assignment += 5; // 15
assignment -= 5; // 10
assignment *= 5; // 50
assignment /= 5; // 10
assignment %= 5; // 0
assignment &= 5; // 0
assignment |= 5; // 5
 
var condition: number = num1 > num2 ? num1 : num2; // 20 ternary operator or conditional operator
```

### 4. String Manipulation and Template Literals

TypeScript provides various methods for manipulating strings such as concatenation, substring, length, indexOf, lastIndexOf, charAt, charCodeAt, toUpperCase, toLowerCase, trim, split, replace, and match. Let's take a look at some examples of using these methods in TypeScript.

```typescript

--Example code goes here--

var str1: string = "Hello";
var str2: string = "TypeScript";

var concat: string = str1 + " " + str2;  // "Hello TypeScript"
var substring: string = str1.substring(1, 3);  // "el"
var length: number = str1.length;  // 5
var indexOf: number = str1.indexOf("l"); // 2
var lastIndexOf: number = str1.lastIndexOf("l"); // 3
var charAt: string = str1.charAt(1);  // "e"
var charCodeAt: number = str1.charCodeAt(1); // 101
var toUpperCase: string = str1.toUpperCase(); // "HELLO"
var toLowerCase: string = str1.toLowerCase(); // "hello"
var trim: string = "  Hello  ".trim(); // "Hello"
var split: string[] = "Hello,TypeScript".split(","); // ["Hello", "TypeScript"]
var replace: string = "Hello, TypeScript".replace("Hello", "Hi"); // "Hi, TypeScript"
var match: RegExpMatchArray | null = "Hello, TypeScript".match(/Hello/); // ["Hello"]
```

### 5. IF-ELSE-IF Statements and Nested IF Statements

TypeScript provides if-else-if statements and nested if statements for conditional execution of code blocks. Let's take a look at some examples of using if-else-if statements and nested if statements in TypeScript.

```typescript

--Example code goes here--

var num: number = 10;

if (num > 0) {
    console.log("Positive number");
} else if (num < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}

var num1: number = 10;
var num2: number = 20;

if (num1 > num2) {
    console.log("num1 is greater than num2");
} else {
    if (num1 < num2) {
        console.log("num1 is less than num2");
    } else {
        console.log("num1 is equal to num2");
    }
}
``` 

### 6. Functions and Arrow Functions

TypeScript provides functions and arrow functions for defining reusable blocks of code. Functions can have parameters and return values. Arrow functions are a shorthand syntax for defining functions. Let's take a look at some examples of using functions and arrow functions in TypeScript.

```typescript

--Example code goes here--

function add(num1: number, num2: number): number {
    return num1 + num2;
}

var sum: number = add(10, 20); // 30

var subtract = function (num1: number, num2: number): number {
    return num1 - num2;
}

var difference: number = subtract(20, 10); // 10

single line arrow function

var multiply = (num1: number, num2: number): number => num1 * num2;

```

### 7. Var vs Let vs Const

TypeScript provides var, let, and const keywords for declaring variables. The var keyword is function-scoped, the let keyword is block-scoped, and the const keyword is block-scoped and cannot be reassigned. Let's take a look at some examples of using var, let, and const in TypeScript.

```typescript

--Example code goes here--

function varExample() {
    if (true) {
        var num: number = 10;
    }
    console.log(num); // 10
}

function letExample() {
    if (true) {
        let num: number = 10;
    }
    console.log(num); // Error: Cannot find name 'num'
}

function constExample() {
    const num: number = 10;
    num = 20; // Error: Cannot assign to 'num' because it is a constant
}
```

### 8. Arrays and Array Methods

TypeScript provides arrays and array methods for working with collections of elements. Arrays can be created using square brackets [] or the Array constructor. Let's take a look at some examples of using arrays and array methods in TypeScript.

```typescript

--Example code goes here--

var numbers: number[] = [1, 2, 3, 4, 5];
var colors: Array<string> = ["Red", "Green", "Blue"];

var firstNumber: number = numbers[0]; // 1
var lastColor: string = colors[colors.length - 1]; // "Blue"

numbers.push(6); // [1, 2, 3, 4, 5, 6]
colors.pop(); // ["Red", "Green"]

numbers.unshift(0); // [0, 1, 2, 3, 4, 5, 6]
colors.shift(); // ["Green", "Blue"]

var slicedNumbers: number[] = numbers.slice(1, 4); // [1, 2, 3] start index, end index (end index not included)
var splicedNumbers: number[] = numbers.splice(1, 2); // [1, 2] start index, number of elements to remove

var sortedNumbers: number[] = numbers.sort((a, b) => a - b); // [0, 3, 4, 5, 6]
var reversedNumbers: number[] = numbers.reverse(); // [6, 5, 4, 3, 0]

var filteredNumbers: number[] = numbers.filter(num => num > 3); // [4, 5, 6]
var mappedNumbers: number[] = numbers.map(num => num * 2); // [12, 10, 8, 6, 0]

var sumOfNumbers: number = numbers.reduce((acc, num) => acc + num, 0); // 18
var maxNumber: number = numbers.reduce((max, num) => Math.max(max, num), numbers[0]); // 6

var hasNumber: boolean = numbers.includes(3); // true
var indexOfNumber: number = numbers.indexOf(3); // 3

var joinedNumbers: string = numbers.join(", "); // "6, 5, 4, 3, 0"
```

### 9. Loops and Iterators

TypeScript provides for loops, while loops, do-while loops, and iterators for iterating over arrays and objects. Let's take a look at some examples of using loops and iterators in TypeScript.

```typescript

--Example code goes here--

var numbers: number[] = [1, 2, 3, 4, 5];

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

var index: number = 0;
while (index < numbers.length) {
    console.log(numbers[index]);
    index++;
}

var index: number = 0;

do {
    console.log(numbers[index]);
    index++;
} while (index < numbers.length);

for (var num of numbers) {
    console.log(num);
}

for (var index in numbers) {
    console.log(numbers[index]);
}
```

### 10. Prefix and Postfix Operators

TypeScript provides prefix and postfix operators such as ++ and -- for incrementing and decrementing variables. Let's take a look at some examples of using prefix and postfix operators in TypeScript.

```typescript

--Example code goes here--

var num: number = 10;

var prefixIncrement: number = ++num; // 11
var postfixIncrement: number = num++; // 11

var prefixDecrement: number = --num; // 10
var postfixDecrement: number = num--; // 10
```

### 11. Objects and Object Methods

TypeScript provides objects and object methods for working with key-value pairs. Objects can be created using curly braces {} or the Object constructor. Let's take a look at some examples of using objects and object methods in TypeScript.

```typescript

--Example code goes here--

var person: { name: string, age: number } = { name: "John", age: 30 };

var name: string = person.name; // "John"

person.age = 40;

var keys: string[] = Object.keys(person); // ["name", "age"]

var values: any[] = Object.values(person); // ["John", 40]

var entries: [string, any][] = Object.entries(person); // [["name", "John"], ["age", 40]]

var hasName: boolean = person.hasOwnProperty("name"); // true

var isEnumerable: boolean = person.propertyIsEnumerable("name"); // true

var personCopy: { name: string, age: number } = { ...person }; // { name: "John", age: 40 }
```

### 12. Asynchronous and Synchronous Code 

TypeScript provides asynchronous and synchronous code execution using callbacks, promises, async/await, and generators. Asynchronous code allows you to perform tasks concurrently without blocking the main thread. Let's take a look at some examples of using asynchronous and synchronous code in TypeScript.

```typescript

--Example code goes here--

// Callbacks

function fetchData(callback: (data: any) => void) {
    setTimeout(() => {
        callback({ name: "John", age: 30 });
    }, 1000);
}

fetchData((data) => {
    console.log(data);
});

// Promises

function fetchData(): Promise<any> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: "John", age: 30 });
        }, 1000);
    });
}

fetchData().then((data) => {
    console.log(data);
});

// Async/Await

async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: "John", age: 30 });
        }, 1000);
    });
}

async function getData() {
    const data = await fetchData();
    console.log(data);
}

getData();

// Generators

function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
}

const numbers = generateNumbers();

console.log(numbers.next().value); // 1

console.log(numbers.next().value); // 2

console.log(numbers.next().value); // 3
```

### 13. Import and Export Modules

TypeScript provides import and export statements for modularizing code into separate files. Modules allow you to organize code into reusable components and share code between files. Let's take a look at some examples of using import and export statements in TypeScript.

```typescript

--Example code goes here--

// math.ts

export function add(num1: number, num2: number): number {
    return num1 + num2;
}

export function subtract(num1: number, num2: number): number {
    return num1 - num2;
}

// app.ts

import { add, subtract } from "./math";

var sum: number = add(10, 20); // 30

var difference: number = subtract(20, 10); // 10
```

