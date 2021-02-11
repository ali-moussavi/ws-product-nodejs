const getHourlyStats = (req, res, next) => {
	req.sqlQuery = `
  SELECT hourly_stats.* , poi.name
  FROM public.hourly_stats
LEFT JOIN public.poi ON public.poi.poi_id = public.hourly_stats.poi_id
  ORDER BY date, hour
  LIMIT 1008;
  `;
	return next();
};
const getDailyStats = (req, res, next) => {
	req.sqlQuery = `
  SELECT poi.name , dailyStats.*
  FROM public.poi
  RIGHT JOIN (
    SELECT date, poi_id, SUM(impressions) AS impressions,SUM(clicks) AS clicks,SUM(revenue) AS revenue
    FROM public.hourly_stats
    GROUP BY date , poi_id
    ORDER BY date, poi_id
    LIMIT 168) AS dailyStats ON public.poi.poi_id = dailyStats.poi_id
  ORDER BY date , poi_id;
  `;
	return next();
};

module.exports = {
	getDailyStats,
	getHourlyStats,
};
