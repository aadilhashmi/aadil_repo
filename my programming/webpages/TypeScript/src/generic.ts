export {}
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
function myGeneric<T1,  T2>(str1: T1 , str2: T2){
    let x = `${str1} ${str2}`;
    return x;
}
let result = myGeneric("Hello",44 )
console.log(result);
