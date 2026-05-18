// const os = require("os");
// console.log(os);
// const http = require("http");
// const server = http.createServer(function (req, res) {
//   console.log("request recived");
// });
// server.listen(7897, function () {
//   console.log("it is listening");
// });
// TO GET WEB SERVER USING EXPERSS//

// first of all at integrated terminal do=> node i express  --save

// 1,Importing express
const express = require("express");
// call express method
const app = express();
// To LISTENING BY THE BROWTHER
app.listen(3000, (err) => {
  console.log("Listening to port 3000");
}); 
// app.get("/",(request,response)=>{
//   response.end("<h1>Hellow Express!!</h1>");
// });
// app.get("/indexes.html", (request, response) => {
//   response.end("<h1>Hellow Express!!</h1>");
// });
app.use(express.static("apple by http request"));
// app.get("/", (req, res) => {
//   res.send("page is not found 404");
// });
