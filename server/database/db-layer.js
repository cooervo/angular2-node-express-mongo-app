exports.getDbModel = function () {

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

    var UseCase = mongoose.model("UseCase", useCaseSchema);
    return UseCase;
}
