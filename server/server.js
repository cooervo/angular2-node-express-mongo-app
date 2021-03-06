"use strict";
var http = require("http");
var express = require("express");
var expressApp = express();
var server = http.createServer(expressApp);
var portNum = process.env.PORT || 3001;
var midWare = require("./express-general-middleware");
var router = require("./routes/routes");
var db = require("./database/db-layer");

midWare.enableBodyParser(expressApp);
midWare.allowCors(expressApp);

var UseCase = db.getDbModel();
router.routes(expressApp, UseCase);

server.listen(portNum, function () {
    console.log("Webserver IS RUNNING on port: " + portNum);
})