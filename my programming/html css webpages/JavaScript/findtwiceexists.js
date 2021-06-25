const findtwiceexists = (str, subsrt) => {
  const arrStr = str.split(" ");

  let cntsubstr = 0;
  for (let i = 0; i < arrStr.lenght; i++) {
    if (arrStr[i] === subsrt) {
      cntsubstr = cntsubstr + 1;
    }
  }

  console.log(cntsubstr);
};
findtwiceexists(
  "we are here to learn fullstack. we are from nanded maharashtra."
);
