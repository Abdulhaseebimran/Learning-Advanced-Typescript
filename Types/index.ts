let num:number = 10;
let userName: string = "Abdul Haseeb";
let isCompleted:boolean = true;
let isNull : null = null;
let isUndefined : undefined = undefined;
let isVoid: void = undefined; // void can only be assigned undefined or null

let isAny : any = 10; // any can be assigned any value
isAny = "Hello world";
isAny = false;

let isUnknown : unknown = "Hello world" // unknown can be assigned any value but it is more strict than any
isUnknown = 10;
isUnknown = false;

if(typeof isUnknown === "string"){
    console.log(isUnknown);
}


const returnError = (): never => {
    throw new Error("Error Occured");
    
}

