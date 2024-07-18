// console.log("Async and await in typescript");

async function fetchUserData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
}

fetchUserData().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

console.log("After calling fetchUserData");

// async function userData(users: string) {
//     await fetchUserData();
//     console.log("Fetching user data", users);
// }

// userData("John");
// console.log("After calling userData");


// try {
    
// } catch (error) {
    
// }

try {
    throw new Error("This is an error");
} catch (error) {
    console.log("error: ",error);
    
}
