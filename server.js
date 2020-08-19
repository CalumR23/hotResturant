
var express = require("express");


var app = express();
const routes = require("./routes");

// Sets an initial port. We"ll use this later in our listener


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes)

app.listen(3000)
