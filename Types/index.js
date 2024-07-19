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
