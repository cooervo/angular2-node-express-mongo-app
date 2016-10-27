var bodyParser = require('body-parser');

exports.enableBodyParser = function (expressApp) {

    /** bodyParser.urlencoded(options)
     * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
     * and exposes the resulting object (containing the keys and values) on req.body
     */
    expressApp.use(bodyParser.urlencoded({
        extended: true
    }));

    /** bodyParser.json()
     * Parses the text as JSON and exposes the resulting object on req.body.
     */
    expressApp.use(bodyParser.json());
};

exports.serveStaticFiles = function (expressApp, express, path) {
    expressApp.use(express.static(path.join(__dirname, "../client/")));

}