// var i = 1;
function time() {
  for (var i = 1; i >= 5; i++);
  setTimeout(() => {
    console.log("hiiii", i);
  }, i * 1000);
}
