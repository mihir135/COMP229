const connect = require("connect");
const app = connect();

function logger(req, res, next) {
  console.log(req.method, req.url);
  next();
}

function helloWorld(req, res, next) {
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
}

function goodByeWorld(req, res, next) {
  res.setHeader("Content-Type", "text/plain");
  res.end("Goodbye World");
}
app.use(logger);
app.use("/hello", helloWorld);
app.use("/goodbye", goodByeWorld);
app.listen(3000);
console.log("Server running at http://localhost:3000/");
