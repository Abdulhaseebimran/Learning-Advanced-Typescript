var students:number[] = [1,2,3,4,5,6,7,8,9,10];
// console.log(students[1]);

var sum1:number = students[3] + students[5];
// console.log(sum1);

var stdName:string[] = ["Ali", "Ahmed", "Asad", "Ahsan"];
// console.log(stdName[2].toUpperCase());

var newArr:number[] = new Array(10);
newArr[0] = 10;
newArr[1] = 20;
newArr[2] = 30;
// console.log(newArr);

function pushNewItem(stdNames:string){
    stdName[4] = stdNames;
}

pushNewItem("Asim");
pushNewItem("Adeel");

// console.log(stdName);

// console.log(stdName.length);


let CityName:string[] = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// function AddCityName (item:string){
//     CityName[(CityName.length)] = item;
// }

// AddCityName("Hyderabad");
// console.log(CityName);

// CityName.push("Multan");
// CityName.pop();
// CityName.unshift("Multan");
// CityName.shift();

// console.log(CityName.slice(1, 3)); // Lahore, Islamabad
// console.log(CityName.splice(1,3, "Multan", "Faisalabad"));
// console.log(CityName);

// for loop, while loop, do while loop

for(let i = 0; i<=5; i++){
    // console.log("Hello World", i);
    
}

var i:number = 0;

while (i<=5) {
    // console.log("Hello World", i);
    i++;
}

// console.log("Outer loop");


// print the table of 2 using while loop

var j:number = 1;

while (j<=10) {
    // console.log("2 x ", j, " = ", 2 * j);
    j++;
}

// do while loop

var i:number = 0;
do {
    // console.log("Hello World", i);
    i++;
} while (i<=5);

if (true) {
    var a:number = 1;
    do {
    //    console.log("Hello World", a * 5);
       a++;
    } while (a<=5);
}


// prefix and postfix 

let index:number = 1;

let result:number = index++;
let result2:number = ++index;

// console.log("Index", index);
// console.log("Result", result);
// console.log("Result 2:" , result2);

var sum:number = 1;
let sumArray:number[] = [];
let sumArray2:number[] = [];
for(let i = 1; i <=200; i++){
    if (i % 2 === 0) {
        sum = sum + i;
        sumArray.push(i);
    }
}

// console.log("Sum of Even Numbers", sumArray);
// console.log("Sum of Odd Numbers", sumArray2);

// for each loop

let cities:string[] = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// cities.forEach(function(city){
//     console.log(city); // Karachi, Lahore, Islamabad, Quetta, Peshawar
// })

// another example of for each loop\

let numbers:number[] = [1,2,3,4,5,6,7,8,9,10];

let sum3:number = 0;

// numbers.forEach(function(number){
//     sum3 = sum3 + number;
//     console.log(sum3);
    
// })


// Map loop

let cities2:string[] = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// cities2.map((cite) => {
//     console.log("Hello World", cite);
// })

// filter loop

let numbers2:number[] = [1,2,3,4,5,6,7,8,9,10];

let evenNumbers:number[] = numbers2.filter((num) => {
    return num % 2 === 0;
})

// console.log("Even Numbers", evenNumbers);

