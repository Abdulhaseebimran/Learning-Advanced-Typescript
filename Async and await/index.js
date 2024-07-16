"use strict";
// console.log("Async and await in typescript");
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchUserData() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://jsonplaceholder.typicode.com/users");
        const data = yield response.json();
        return data;
    });
}
fetchUserData().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
console.log("After calling fetchUserData");
function userData(users) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetchUserData();
        console.log("Fetching user data", users);
    });
}
userData("John");
console.log("After calling userData");
