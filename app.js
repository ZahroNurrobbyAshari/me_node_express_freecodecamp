const http = require("http");
const port = 5000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("home");
  }
  if (req.url === "/about") {
    res.end("about page");
  }
  res.end(`
    <h1>Oops</h1>
    `);
});

server.listen(port);
