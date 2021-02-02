const getPoi = (req, res, next) => {
	req.sqlQuery = `
    SELECT *
    FROM public.poi;
  `;
	return next();
};

module.exports = {
	getPoi,
};
