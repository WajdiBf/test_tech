const mongoose = require('mongoose');
const moment = require('moment');
const employeeSchema = mongoose.Schema({
	name: {
		type: String,
		trim: true
	},
	firstName: {
		type: String
	},
	department: {
		type: String
	},
	dateCreated: {
		type: String,
		default: () => moment().format('YYYY-DD-MM')
	},

	checkIn: {
		type: String
	},
	checkOut: {
		type: String
	},
	comment: {
		type: String
	},
	absentFor: {
		type: String
	}
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
