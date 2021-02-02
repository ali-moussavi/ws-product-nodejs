const getHourlyEvents = (req, res, next) => {
	req.sqlQuery = `
SELECT date, SUM(events) AS events
FROM public.hourly_events
GROUP BY date
ORDER BY date
LIMIT 7;
`;
	return next();
};
const getDailyEvents = (req, res, next) => {
	req.sqlQuery = `
SELECT date, hour, impressions, clicks, revenue
FROM public.hourly_stats
ORDER BY date, hour
LIMIT 168;
`;
	return next();
};

module.exports = {
	getDailyEvents,
	getHourlyEvents,
};
