
let aadil123: number = 5;


aadil123 = 5;
// any

let ab: any = "aadil";

ab = "aadil";


// example of any
let x1: any[];
x1 = ["any example", 1, false]
console.log(x1)

// array with string

let arr: string[]
arr = ["Hello", "Rizwan"]
console.log(arr)

//tuple

let person: [number, string, boolean];

person = [2, "rizwan", false];
console.log(person)

//tuple array

let Emp: [number, string, boolean][];

Emp = [
  [1, "aadil", false],
  [2, "rizwan", true],
  [3, "ajay", true],
];
console.log(Emp[0])
//union

let riz: string | number | boolean;

riz = true;

//enum

enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up= "Up",
  Down="Down",
  Left="Left",
  Right="Right"
}

console.log(Direction2.Left)

// enum  another exmple

enum Color {
  Red="hello",
  Blue="Rizwan",
  Green="enum example",
}
let x: Color = Color.Green
console.log(x)

// 3rd example of enum
enum paylog{
  mon = 125.33,
  tue = 112.44,
  wed = 334,
  thus = 12.44,
  fri=0.5
}
let paycheck: number = paylog.mon + paylog.tue + paylog.wed + paylog.thus + paylog.fri;

console.log(paycheck)

//object

type User = {
    id: number
    name: string
}

const user : User = {
    id: 1,
    name: "aadil rizwan"

}

//type assertion

let cid: any = "riz"
 
    // let CusId = <number>cid
    let CusId= cid as number 
// CusId = "riz" //error found bcz we put string here 
CusId=2 //no error
 
//CusId should be number in assertion bcz we already declare CusId as number 


//Functions 

function addNum(x: number, y: number) :number{
    return x + y
}
  console.log(addNum(1,2))


//Void

function log(massage: string | number): void {
console.log(massage);
}
log(2)


//Interfaces

interface UserInterfaces {
  readonly id: number,
  name: string,
  age?: number
}

const userdetail: UserInterfaces = {
    id: 1,
  name: "aaadil",
  
}
// userdetail.id= 5
// console.log(userdetail)

//Interfaces with function

interface MathFunc {
  (x: number, y: number): number 
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

console.log(add(2,8))