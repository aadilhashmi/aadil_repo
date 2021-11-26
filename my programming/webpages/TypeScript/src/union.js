// type union
var assume;
assume = undefined;
assume = " Hello";
assume = 30;
//  union with function
var unionfunc = function (x, y) {
    if (typeof x == "string") {
        x = parseInt(x, 10);
    }
    if (typeof y == "string") {
        y = parseInt(y, 10);
    }
    return x + y;
};
console.log(unionfunc("5", 100));
