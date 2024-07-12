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
console.log(CityName.splice(1,3, "Multan", "Faisalabad"));
console.log(CityName);
