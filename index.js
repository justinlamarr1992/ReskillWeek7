import http from "http";
import express from "express";
import fetch from "node-fetch";

var app = express();

const server = http
  .createServer((req, res) => {
    const url = req.url;
    let tableData =
      "<table border='1'><tr><th>Name</th><th>Height</th><th>Birth Year</th><th>Gender</th><th>URL</th></tr>";
    // console.log(url);
    // res.write("Testing Server");
    // res.end();
    if (url === "/") {
      res.write("Welcome to the Home Page");
      res.send('/assets/welcome.png"');
      //   res.send(<img src="/assets/welcome.png" />);
      //   res.sendFile(`<img src="assets/welcome.png" />`);
      //   res.sendFile("./assets/welcome.png");
      //   app.use(express.static(__dirname + "/assets"));
      res.end();
    }
    if (url === "/list") {
      fetch("https://swapi.dev/api/people")
        .then((res) => res.json())
        .then((data) => {
          //   console.log(data.results);
          const test = data.results;
          console.log(test);

          createData(test);

          res.write(tableData);
          res.end();
        });
    } else {
      res.write("Error Page Not Found");
      res.end();
    }
    function createData(data) {
      data.forEach((element) => {
        tableData += `<tr><td>${element.name}</td><td>${element.height}</td><td>${element.birth_year}</td><td>${element.gender}</td><td>${element.url}</td></tr>`;
      });
      tableData += `</table>`;
    }
  })
  .listen(8090, console.log(`Server listening on Port ${8090}`));
