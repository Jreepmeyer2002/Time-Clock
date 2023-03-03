module.exports = app => {


    var router = require("express").Router();
    const db = require('./queries')
  
    // Create a new Punch
    router.get("/", db.ping);
    router.get("/user/:id", db.getUser);
    router.put("/in/:id/:company", db.clockIn);
    router.put("/out/:id/:company", db.clockOut);
    router.get("/status/:id/:company", db.getStatus);
    app.use('/api/time', router);
  };