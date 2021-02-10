const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const statsRoutes = require("./routes/statsRoutes");
const eventsRoutes = require("./routes/eventsRoutes");
const poiRoutes = require("./routes/poiRoutes");
const rateLimiter = require("./middleware/rateLimiter");

dotenv.config();

const app = express();

app.use(rateLimiter.customRedisRateLimiter);

app.get("/api", (req, res) => {
	res.send("Welcome to EQ Works 😎");
});

app.use("api/events/", eventsRoutes);
app.use("api/stats/", statsRoutes);
app.use("api/poi/", poiRoutes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join("public")));
	app.get("*", (req, res, next) => {
		res.sendFile(path.resolve(__dirname, "public", "index.html"));
	});
}

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
