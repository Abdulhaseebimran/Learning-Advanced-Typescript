// Objects class 6

const myObj = {
    name: 'John',
    age: 30,
    email: 'john@j.com'
}

// console.log(myObj.name); // John
// console.log(myObj["email"]); // john@j.com

const car:{company:string, model:string, price:number, color:string, publishYear:number, isAvailable:boolean} = {
    company: 'Toyota',
    model: 'Corolla',
    price: 20000,
    color: 'black',
    publishYear: 2020,
    isAvailable: true
}

// console.log(car.company); // Toyota
// console.log(car["publishYear"]); // 2020


type carsTypes = {company:string, model:string, price:number, color:string}

const car1:carsTypes = {
    company: 'Toyota',
    model: 'Corolla',
    price: 20000,
    color: 'black'
}

// Arrays of Objects

const NewCars:carsTypes[] = [
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
]

// console.log(NewCars[1].company); // Honda

// for (const key in NewCars) {
//    console.log(NewCars[key].company); 
//    console.log(NewCars[key].model);
// }

for(let i = 0; i < NewCars.length; i++){
    const cars = NewCars[i]; // {company: 'Toyota', model: 'Corolla', price: 20000, color: 'black'}
    if (cars.company === 'Honda') {
        console.log(cars.model);
    }
}