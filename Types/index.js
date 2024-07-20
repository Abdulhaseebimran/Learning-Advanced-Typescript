"use strict";
let num = 10;
let userName = "Abdul Haseeb";
let isCompleted = true;
let isNull = null;
let isUndefined = undefined;
let isVoid = undefined; // void can only be assigned undefined or null
let isAny = 10; // any can be assigned any value
isAny = "Hello world";
isAny = false;
let isUnknown = "Hello world"; // unknown can be assigned any value but it is more strict than any
isUnknown = 10;
isUnknown = false;
if (typeof isUnknown === "string") {
    console.log(isUnknown);
}
const returnError = () => {
    throw new Error("Error Occured");
};
const student = {
    name: "Abdul Haseeb",
    age: 22,
    isCompleted: true
};
// console.log(student.name);
const student1 = {
    name: "Abdul Haseeb",
    age: 22,
    isCompleted: true
};
const student2 = {
    name: "Abdul Haseeb",
    age: 22,
    isCompleted: true
};
// console.log(student2);
// Array
let numbers = [1, 2, 3, 4, 5];
let names = ["Abdul", "Haseeb", "Ali"];
let mixed = [1, "Hello", true];
let tuple = ["Abdul Haseeb", true, 22, 20];
const student3 = [{
        name: "Abdul Haseeb",
        age: 22,
        isCompleted: true,
        address: "Karachi"
    },
    {
        name: "Abdullah",
        age: 22,
        isCompleted: true
    },
    {
        name: "Abdul",
        age: 22,
        isCompleted: true,
        address: "Karachi"
    }
];
// console.log(student3[0].address);
// union 
let num1 = null;
num1 = 102;
console.log(num1);
