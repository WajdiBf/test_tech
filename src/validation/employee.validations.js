const Validator = require('validator');
const isEmpty = require('../helpers').isEmpty;
module.exports = {
	validateRegisterInput: (req, res, next) => {
		const errors = {};
		const data = req.body;
		console.log(data);
		let diffItems = Object.keys(data).filter(x => !['name', 'firstName', 'department'].includes(x));
		if (diffItems.length > 0) {
			diffItems.map(item => Object.assign(errors, { [item]: 'This field is not authorized...' }));
		}

		data.name = !isEmpty(data.name) ? data.name : '';
		data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
		data.department = !isEmpty(data.department) ? data.department : '';

		if (Validator.isEmpty(data.name)) {
			errors.name = 'This  field is required...';
		}

		if (Validator.isEmpty(data.firstName)) {
			errors.firstName = 'This  field is required...';
		}

		if (Validator.isEmpty(data.department)) {
			errors.department = 'This  field is required...';
		}

		if (!isEmpty(errors)) {
			return res.status(400).json({
				error: errors,
				status: 400,
				data: null
			});
		} else {
			next();
		}
	},
	validateCheckInOutParams: (req, res, next) => {
		const errors = {};
		const data = req.body;
		console.log(data);
		data.name = !isEmpty(data.name) ? data.name : '';

		if (Validator.isEmpty(data.name)) {
			errors.name = 'This  field is required...';
		}

		if (!isEmpty(errors)) {
			return res.status(400).json({
				error: errors,
				status: 400,
				data: null
			});
		} else {
			next();
		}
	}
};
