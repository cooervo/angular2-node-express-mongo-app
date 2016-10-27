"use strict";

//===Node modules & Express modules===
var http = require("http");
var path = require("path");

var express = require("express");
var expressApp = express();
var server = http.createServer(expressApp);
var bodyParser = require('body-parser');

var portNum = process.env.PORT || 3001;

expressApp.use(bodyParser.urlencoded({
    extended: true
}));
expressApp.use(bodyParser.json());

expressApp.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var mongoose = require('mongoose');
mongoose.Promise = require("bluebird");
mongoose.connect('mongodb://localhost/motious_db');
// Create Schema to define structure of a document
var useCaseSchema = mongoose.Schema({
        title: String,
        body: String,
    },
    {collection: "use_cases"}
);


// Compile into model
var UseCase = mongoose.model("UseCase", useCaseSchema);


//Routers
expressApp
    .get("/cases", function (req, res) {

        UseCase.find({}).exec().then(function (results) {
                res.json(results);

            }
        ).catch(function (err) {
            console.log("error", err)
        });

    })


    .post("/case", function (req, res) {
        console.log("req", req.body);
            UseCase.create(req.body, function (err, results) {
                console.log("err", err)
                console.log("results", results)
            });

        res.json("Wooot")
    })

;

server.listen(portNum, function () {
    console.log("Webserver on port: " + portNum);
})