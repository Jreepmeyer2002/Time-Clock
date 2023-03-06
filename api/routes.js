module.exports = app => {
    var router = require("express").Router();
    const queries = require('./queries')

    // Create a new Punch
    router.get("/", queries.ping);
    router.get("/user/:id", queries.getUser);
    router.put("/in/:id/:company", queries.clockIn);
    router.put("/out/:id/:company", queries.clockOut);
    router.get("/status/:id/:company", queries.getStatus);
    app.use('/api/time', router);
};
