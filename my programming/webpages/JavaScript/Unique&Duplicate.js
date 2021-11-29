//get all unique elements from an array

const arr = [1, 2, 2, 3, 4, 4, 5, 6, 7, 7];

const getUnique = arr.filter((e, i, a) => a.indexOf(e) === i);

console.log(getUnique);

//get only duplicate elements from an array

const alphabets = ["a", "b", "b", "c", "c"];

const anotherMethod = alphabets.filter(
  (ele, ind, ar) => ar.indexOf(ele) !== ind
);

console.log(anotherMethod);
