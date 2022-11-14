const http = require("http");
var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());

/**
 * 
 * This Functions allows to get the company name
 * @param: nothing
 * @returns: String
 */
app.get("/getCopyrights", function (req, res, next) {
  res.json({msg:"<a id='copyrightspinaaka' href='https://pinakadigitech.com/'>Pinaka Digitech</a>"});
});

app.listen(80, function () {
  console.log("Server running on 80");
});
