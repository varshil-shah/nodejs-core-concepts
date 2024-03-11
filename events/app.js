const Events = require("./events");

class MyEvents extends Events {}

const eventEmitter = new MyEvents();

eventEmitter.on("foo", function () {
  console.log("Fetch data from server...");
});

eventEmitter.on("foo", function () {
  console.log("Load data from external storage...");
});

eventEmitter.once("bar", function (country) {
  console.log("Hello World!", country);
});

eventEmitter.once("bar", function () {
  console.log("Hello World!");
});

eventEmitter.emit("foo");
eventEmitter.emit("bar", "India");

eventEmitter.printListeners();
