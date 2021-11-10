"use strict";
let aadil123 = 5;
aadil123 = 5;
// any
let ab = "aadil";
ab = "aadil";
// example of any
let x1;
x1 = ["any example", 1, false];
console.log(x1);
// array with string
let arr;
arr = ["Hello", "Rizwan"];
console.log(arr);
//tuple
let person;
person = [2, "rizwan", false];
console.log(person);
//tuple array
let Emp;
Emp = [
    [1, "aadil", false],
    [2, "rizwan", true],
    [3, "ajay", true],
];
console.log(Emp[0]);
//union
let riz;
riz = true;
//enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left);
// enum  another exmple
var Color;
(function (Color) {
    Color["Red"] = "hello";
    Color["Blue"] = "Rizwan";
    Color["Green"] = "enum example";
})(Color || (Color = {}));
let x = Color.Green;
console.log(x);
// 3rd example of enum
var paylog;
(function (paylog) {
    paylog[paylog["mon"] = 125.33] = "mon";
    paylog[paylog["tue"] = 112.44] = "tue";
    paylog[paylog["wed"] = 334] = "wed";
    paylog[paylog["thus"] = 12.44] = "thus";
    paylog[paylog["fri"] = 0.5] = "fri";
})(paylog || (paylog = {}));
let paycheck = paylog.mon + paylog.tue + paylog.wed + paylog.thus + paylog.fri;
console.log(paycheck);
const user = {
    id: 1,
    name: "aadil rizwan"
};
//type assertion
let cid = "riz";
// let CusId = <number>cid
let CusId = cid;
// CusId = "riz" //error found bcz we put string here 
CusId = 2; //no error
//CusId should be number in assertion bcz we already declare CusId as number 
//Functions 
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
//Void
function log(massage) {
    console.log(massage);
}
log(2);
const userdetail = {
    id: 1,
    name: "aaadil",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log(add(2, 8));
