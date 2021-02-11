const pg = require("pg");

// configs come from standard PostgreSQL env vars
// https://www.postgresql.org/docs/9.6/static/libpq-envars.html
const pool = new pg.Pool({
	ssl: {
		rejectUnauthorized: false,
	},
});
const queryHandler = (req, res, next) => {
	pool.query(req.sqlQuery)
		.then((r) => {
			return res.json(r.rows || []);
		})
		.catch((err) => {
			console.log(err);
			next(err);
		});
};

module.exports = { queryHandler };
