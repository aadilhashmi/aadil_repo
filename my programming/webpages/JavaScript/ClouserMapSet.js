function outer() {
  const name = " aadil";

  function inner(str) {
    return `${name} ${str}`;
  }
  return inner("Rizwan");
}
// console.log(outer());


//Map mathod to create object 

const Mydata = new Map();
Mydata.set("name", "aadil");
Mydata.set("name2", "Rizwan");
// Mydata.get("name","name2");
Mydata.delete("name2");
console.log(Mydata.get("name"));
Mydata.set("data", { name: "Aadil", address: "chaitaniya nagar nanded" })
const value = Mydata.get("data");
console.log(value.name, ',', value.address);


//Set is mainly used to remove dublicate from array

const myArr = [1, 1, 2, 2, 3, 4, 3, 4];
const uniqueArr = [...new Set(myArr)];
console.log(uniqueArr);