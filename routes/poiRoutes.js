const express = require("express");
const db = require("../config/db");
const poiControllers = require("../controllers/poiControllers");

const router = express.Router();

module.exports = router;

//@desc fetch all POIs
//@route  GET /poi

router.get("", poiControllers.getPoi, db.queryHandler);
