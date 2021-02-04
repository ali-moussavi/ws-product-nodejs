const express = require("express");
const dotenv = require("dotenv");
const statsRoutes = require("./routes/statsRoutes");
const eventsRoutes = require("./routes/eventsRoutes");
const poiRoutes = require("./routes/poiRoutes");
const rateLimiter = require("./middleware/rateLimiter");

dotenv.config();

const app = express();

app.use(rateLimiter.customRedisRateLimiter);

app.get("/", (req, res) => {
	res.send("Welcome to EQ Works 😎");
});

app.use("/events/", eventsRoutes);
app.use("/stats/", statsRoutes);
app.use("/poi/", poiRoutes);

app.listen(process.env.PORT || 5555, (err) => {
	if (err) {
		console.error(err);
		process.exit(1);
	} else {
		console.log(`Running on ${process.env.PORT || 5555}`);
	}
});

// last resorts
process.on("uncaughtException", (err) => {
	console.log(`Caught exception: ${err}`);
	process.exit(1);
});
process.on("unhandledRejection", (reason, p) => {
	console.log("Unhandled Rejection at: Promise", p, "reason:", reason);
	process.exit(1);
});
