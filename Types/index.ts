let num: number = 10;
let userName: string = "Abdul Haseeb";
let isCompleted: boolean = true;
let isNull: null = null;
let isUndefined: undefined = undefined;
let isVoid: void = undefined; // void can only be assigned undefined or null

let isAny: any = 10; // any can be assigned any value
isAny = "Hello world";
isAny = false;

let isUnknown: unknown = "Hello world" // unknown can be assigned any value but it is more strict than any
isUnknown = 10;
isUnknown = false;

if (typeof isUnknown === "string") {
    console.log(isUnknown);
}


const returnError = (): never => {
    throw new Error("Error Occured");

}

const student: any = {
    name: "Abdul Haseeb",
    age: 22,
    isCompleted: true
}

// console.log(student.name);

const student1: object = {
    name: "Abdul Haseeb",
    age: 22,
    isCompleted: true
}


// console.log(student1);

// const student2: { name: string, age: number, isCompleted: boolean } = {
//     name: "Abdul Haseeb",
//     age: 22,
//     isCompleted: true
// }

// console.log(student2);

type Student = {name: string, age: number, isCompleted: boolean}

const student2: Student = {
    name: "Abdul Haseeb",
    age: 22,
    isCompleted: true
}

// console.log(student2);

// Array

let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Abdul", "Haseeb", "Ali"];

let mixed: (string | number | boolean)[] = [1, "Hello", true];

let tuple :[string, boolean, number, number] = ["Abdul Haseeb", true, 22,20];

// console.log(tuple[2]);

type studentTypes = {
    name: string,
    age: 22,
    isCompleted: true,
    address?: string,
}

const student3: studentTypes[] = [{
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
]


// console.log(student3[0].address);

// union 

let num1 : number | null = null;
num1 = 102;

// console.log(num1);

