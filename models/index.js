const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");

//If we want to use mongoose in diffrent position inside
//the codes it must be viewed as global mode.
mongoose.promise = global.promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./web4nextKhushbu.model.js")(mongoose);

module.exports = db;
