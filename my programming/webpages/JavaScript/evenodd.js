function msg() {
  n = Number(document.getElementById("input").value);
  if (n % 2 == 0) {
    // alert("number is even");
    document.getElementById("demo").innerHTML = "number is even";
  } else {
    // alert("number is odd");
    document.getElementById("demo").innerHTML = "number is odd";
  }
}
function msg2() { }



const a = ["aadil", " Rizwan"];
const b = ["kya", " krre"];
const c = a.concat(b);
console.log(c);

// const a = [1, 2, 3];
// const b = [4, 5, 6];
// a.push.apply(a, b);
// console.log(a);
