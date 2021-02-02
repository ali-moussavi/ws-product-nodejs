const express = require("express");
const db = require("../config/db");
const statsControllers = require("../controllers/statsControllers");

const router = express.Router();

module.exports = router;

//@desc fetch daily stats
//@route  GET /stats/daily

router.get("/daily", statsControllers.getDailyStats, db.queryHandler);

//@desc fetch hourly stats
//@route  GET /stats/hourly

router.get("/hourly", statsControllers.getHourlyStats, db.queryHandler);
