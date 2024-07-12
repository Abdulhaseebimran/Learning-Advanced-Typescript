"use strict";
var students = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(students[1]);
var sum1 = students[3] + students[5];
// console.log(sum1);
var stdName = ["Ali", "Ahmed", "Asad", "Ahsan"];
// console.log(stdName[2].toUpperCase());
var newArr = new Array(10);
newArr[0] = 10;
newArr[1] = 20;
newArr[2] = 30;
// console.log(newArr);
function pushNewItem(stdNames) {
    stdName[4] = stdNames;
}
pushNewItem("Asim");
pushNewItem("Adeel");
// console.log(stdName);
// console.log(stdName.length);
let CityName = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
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
for (let i = 0; i <= 5; i++) {
    // console.log("Hello World", i);
}
var i = 0;
while (i <= 5) {
    // console.log("Hello World", i);
    i++;
}
// console.log("Outer loop");
// print the table of 2 using while loop
var j = 1;
while (j <= 10) {
    // console.log("2 x ", j, " = ", 2 * j);
    j++;
}
// do while loop
var i = 0;
do {
    // console.log("Hello World", i);
    i++;
} while (i <= 5);
if (true) {
    var a = 1;
    do {
        //    console.log("Hello World", a * 5);
        a++;
    } while (a <= 5);
}
// prefix and postfix 
let index = 1;
let result = index++;
let result2 = ++index;
console.log("Index", index);
console.log("Result", result);
console.log("Result 2", result2);
