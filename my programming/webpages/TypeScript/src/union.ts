// type union

let assume: " Hello" | "any " | undefined | null | number;

assume = undefined;
assume = " Hello";
assume = 30;

//  union with function

const unionfunc = (x: string | number, y: string | number) => {
  if (typeof x == "string") {
    x = parseInt(x, 10);
  }
  if (typeof y == "string") {
    y = parseInt(y, 10);
  }
  return x + y;
};
console.log(unionfunc("5", 100));
