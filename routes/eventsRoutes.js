const express = require("express");
const db = require("../config/db");
const eventsControllers = require("../controllers/eventsControllers");

const router = express.Router();

module.exports = router;

//@desc fetch daily events
//@route  GET /events/daily

router.get("/daily", eventsControllers.getDailyEvents, db.queryHandler);

//@desc fetch hourly events
//@route  GET /events/hourly

router.get("/hourly", eventsControllers.getHourlyEvents, db.queryHandler);
