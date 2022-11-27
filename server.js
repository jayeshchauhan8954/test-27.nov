let bodyParser = require("body-parser");
const express = require('express');
const router = require("./routes/index");

const dbConnection = require("./config/db.config");
const books = require("./model/books");
const books = require("./model/users");
const users = require("./model/users");
const expressApp = express();
expressApp.use(bodyParser.json());
expressApp.use(router);

let init = async () => {
    await dbConnection.sync({ force: true });
    books();
    users();
};


expressApp.listen(8080, () => {
    console.log("server listening at port " + 8080)
    init();
});
