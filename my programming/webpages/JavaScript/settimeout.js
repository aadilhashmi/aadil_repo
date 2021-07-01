// // var i = 1;
// const time = () => {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("hello js");
// };
// time();

const setUser = () => {
  for (let i = 0; i < Math.random() * 100; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 500);
  }
  console.log("print array elements");
};
setUser();
