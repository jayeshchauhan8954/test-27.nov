const express = require("express");
let router = express.Router();
router.get("/", (req, res, next) => {
    res.write("This is the base page");
    res.end();
});


module.exports = router;
