const express = require("express");
const mongoose = require("mongoose");
//set up our express app
const app = express();
//connect to mongoDB
mongoose.connect("mongodb://localhost:27017");
mongoose.Promise = global.Promise;
//add support to serve static files
app.use(express.static("public"));
//parse the data to json file
app.use(express.json());
//set the app to use the type and vehicles files(will hold our operations)
app.use("/garage/vehiclesType", require("./routes/type"));
app.use("/garage/vehicles", require("./routes/vehicles"));
//handle the errors that occurred during the operations
app.use(function (err, req, res, next) {
  res.status(422).send({ error: err.message });
});
//listen for request
app.listen(process.env.port || 4500, function () {
  console.log("Ready to Go!");
});
