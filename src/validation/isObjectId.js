const IsObjectId = require('mongoose').isValidObjectId;
module.exports = (req, res, next) => {
	if (req.params.id) {
		if (!IsObjectId(req.params.id)) {
			return res.status(400).json({
				error: 'This is not a valid employee id ...',
				status: 400,
				data: null
			});
		} else {
			next();
		}
	}
};
