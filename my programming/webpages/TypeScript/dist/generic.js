"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function myGeneric<T>(word: T): T{
//     return word;
// }
// let x = myGeneric<string>("hello")
// let y = myGeneric<number>(44)
// let z = myGeneric("hello")
// console.log(x);
// console.log(y);
// console.log(z);
// for multiple arg
function myGeneric(str1, str2) {
    let x = `${str1} ${str2}`;
    return x;
}
let result = myGeneric("Hello", 44);
console.log(result);
