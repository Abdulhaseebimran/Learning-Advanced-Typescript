"use strict";
// Objects class 6
const myObj = {
    name: 'John',
    age: 30,
    email: 'john@j.com'
};
// console.log(myObj.name); // John
// console.log(myObj["email"]); // john@j.com
const car = {
    company: 'Toyota',
    model: 'Corolla',
    price: 20000,
    color: 'black',
    publishYear: 2020,
    isAvailable: true
};
const car1 = {
    company: 'Toyota',
    model: 'Corolla',
    price: 20000,
    color: 'black'
};
// Arrays of Objects
const NewCars = [
    {
        company: 'Toyota',
        model: 'Corolla',
        price: 20000,
        color: 'black'
    },
    {
        company: 'Honda',
        model: 'Civic',
        price: 25000,
        color: 'white'
    },
    {
        company: 'Suzuki',
        model: 'Cultus',
        price: 15000,
        color: 'grey'
    }
];
// console.log(NewCars[1].company); // Honda
// for (const key in NewCars) {
//    console.log(NewCars[key].company); 
//    console.log(NewCars[key].model);
// }
for (let i = 0; i < NewCars.length; i++) {
    const cars = NewCars[i];
    if (cars.company === 'Honda') {
        console.log(cars.model);
    }
}
