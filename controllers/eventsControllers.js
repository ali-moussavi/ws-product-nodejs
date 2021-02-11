const getHourlyEvents = (req, res, next) => {
	req.sqlQuery = `
	SELECT hourly_events.* , poi.name
	FROM public.hourly_events
	LEFT JOIN public.poi ON public.poi.poi_id = public.hourly_events.poi_id
	ORDER BY date, hour
	LIMIT 168;
`;
	return next();
};
const getDailyEvents = (req, res, next) => {
	console.log("in daily events");
	req.sqlQuery = `
	SELECT poi.name , dailyEvents.*
	FROM public.poi 
	RIGHT JOIN (
		SELECT hourly_events.date, SUM(hourly_events.events) AS events ,hourly_events.poi_id
    FROM public.hourly_events
    GROUP BY hourly_events.date , hourly_events.poi_id
    ORDER BY date
    LIMIT 108) AS dailyEvents ON public.poi.poi_id = dailyEvents.poi_id 
	ORDER BY date , poi_id;
`;
	return next();
};

module.exports = {
	getDailyEvents,
	getHourlyEvents,
};
