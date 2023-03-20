module.exports = app => {


    var router = require("express").Router();
    const db = require('./queries')
  
    // Create a new Punch
    router.get("/", db.getStatus);
    router.get("/user", db.getUser);
    router.put("/in", db.clockIn);
    router.put("/out", db.clockOut);
    router.put("/new", db.newUser);
    app.use('/api/time', router);
  };