//// buildint http web server using HTTP module

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello world");
  } else if (req.url === "/about") {
    res.write("about page");
  } else {
    res.write("page not found");
  }

  //   console.log(req.url);
  //   console.log(req.headers);
//   res.write("<h1>Hello world!</h1>");
//   res.write("<h1>Hello</h1>");
  res.end();
});
server.listen(5000);
