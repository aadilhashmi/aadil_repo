const findtwiceexists = (str, subsrt) => {
  const arrStr = str.split(" ");
  let cntsubstr = 0;
  arrStr.forEach((element) => {
    if (element === subsrt) cntsubstr = cntsubstr + 1;
  });
  return cntsubstr;
};

console.log(findtwiceexists("AADILHASHMI", "A"));
