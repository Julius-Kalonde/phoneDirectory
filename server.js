var express = require('express');
var app = express();

app.use(express.static(_dirname + "/public"));
    res.send("Hello World from server.js");

app.listen(3000);
console.log("Server running on the port 3000");
