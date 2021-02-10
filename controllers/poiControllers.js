const getPoi = (req, res, next) => {
	req.sqlQuery = `
  SELECT poi.name , poi.lat, poi.lon , poiStats.* , poiEvents.events
  FROM public.poi
  RIGHT JOIN (
    SELECT date, poi_id, SUM(impressions) AS impressions,SUM(clicks) AS clicks,SUM(revenue) AS revenue
    FROM public.hourly_stats
    GROUP BY date , poi_id
    ORDER BY date, poi_id
    LIMIT 168) AS poiStats ON public.poi.poi_id = poiStats.poi_id
  LEFT JOIN (
    SELECT hourly_events.date, SUM(hourly_events.events) AS events ,hourly_events.poi_id
    FROM public.hourly_events
    GROUP BY hourly_events.date , hourly_events.poi_id
    ORDER BY date
    LIMIT 108
  ) AS poiEvents ON public.poi.poi_id = poiEvents.poi_id AND poiStats.date = poiEvents.date
  ORDER BY date , poi_id;
  `;
	return next();
};

module.exports = {
	getPoi,
};
