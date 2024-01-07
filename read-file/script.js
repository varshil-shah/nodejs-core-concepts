const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.on("request", (req, res) => {
  const fileContent = fs.readFileSync("file.txt");
  res.setHeader("Content-Type", "text/plain");
  res.end(fileContent);
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server is running on port 3000");
});
