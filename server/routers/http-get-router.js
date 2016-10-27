"use strict";
var path = require('path');

// TODO var db = require('./../database/queries.js');

exports.getRouter = function getRouter(expressApp, path) {

    expressApp
        .get("/", function (req, res) {
            res.render(path.join(__dirname, "./../../client/src/app/index.html"));

        });

        /*
        .get("/about", function (req, res) {
            renderer.renderView(res, "../../client/views/about/about.ejs")
        })


        .get("/lawyers/:name_url", function (req, res) {
            var name_url = req.params.name_url;

            //GET lawyerByUrlName
            db.getLawyerByUrlName(name_url, function (data) {
                // then renderProfile
                renderProfile(req, res, data)
            })
        })
        */

};
