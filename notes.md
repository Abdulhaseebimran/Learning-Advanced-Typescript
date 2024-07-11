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

