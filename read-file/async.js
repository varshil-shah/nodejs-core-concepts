console.log("first");

require("fs").readFile("file.txt", (err, data) => {
  console.log("File data read successfully!");
});

console.log("second!");
