console.log("A");

setImmediate(function () {
  console.log("Completed!");
});

setTimeout(function () {
  console.log("C");
}, 10);

console.log("B");

process.nextTick(function () {
  console.log("D");
});
