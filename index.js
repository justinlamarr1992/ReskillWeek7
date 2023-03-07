// import the http
const http = require("http");

// create the server with HTTP
const server = http.createServer((req, res) => {
  console.log("server is created");
});

// initial Port
const PORT = 4000;

// Listen to server
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
