exports.routes = function (expressApp, UseCase) {

    expressApp

    // READ all use cases
        .get("/cases", function (req, res) {

            UseCase.find({}).exec().then(function (results) {
                    res.json(results);

                }
            ).catch(function (err) {
                console.log("error", err)
            });

        })

        // READ use case by id
        .get("/cases/:id", function (req, res) {

            let id = req.params.id;

            UseCase.findOne({_id: id}).exec().then(function (results) {
                    res.json(results);

                }
            ).catch(function (err) {
                console.log("error", err)
            });

        })

        // CREATE a new Use Case
        .post("/case", function (req, res) {
            UseCase.create(req.body, function (err, results) {
                res.json({});
            });
        })
    ;

}