"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    price = 100;
    name = "Toyota";
    constructor(price, name) {
        this.price = price;
        this.name = name;
        console.log(`Car Create name is ${this.name} and price is ${this.price}`);
    }
    startCar = () => {
        console.log("Car is start");
    };
}
// let carA:carType = new Car(100, "Honda");
// carA.startCar();
// promises 
// console.log("Before async call");
// setTimeout(()=>{
//     console.log("First");
// }, 1000);
// console.log("After async call");
// console.log("Before async call");
// setInterval(()=>{
//     console.log("First");
// }, 1000);
// console.log("After async call");
console.log("before promises");
const result = new Promise((res, rej) => {
    if (true) {
        res("promises is resolve");
    }
    else {
        rej("promises is rejected");
    }
});
result.then((success) => {
    console.log("success: " + success);
}).catch((err) => {
    console.log("error: " + err);
});
console.log("after promises");
