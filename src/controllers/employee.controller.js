const { Employee } = require('../models');

const moment = require('moment');
module.exports = {
	createNewEmployee: async (req, res) => {
		try {
			const {} = req.body;
			const newEmployee = await Employee.create(req.body);

			if (newEmployee) {
				return res.status(200).json({
					message: 'Created successfully...',
					status: 200,
					data: newEmployee
				});
			}
		} catch (error) {
			console.log(error);
			return res.status(200).json({
				message: 'Server Error ...',
				status: 400,
				data: null,
				Error: error
			});
		}
	},
	getAllEmployees: async (req, res) => {
		try {
			let query = {};
			if (req.params.created_date) {
				Object.assign(query, {
					dateCreated: req.params.created_date
				});
			}
			console.log(query);
			const employees = await Employee.find(query);
			if (employees) {
				return res.status(200).json({
					message: 'Operations done successfully...',
					status: 200,
					data: employees
				});
			}
		} catch (error) {
			console.log(error);
			return res.status(200).json({
				message: 'Server Error ...',
				status: 400,
				data: null,
				Error: error
			});
		}
	},
	CheckIn: async (req, res) => {
		try {
			const employee = await Employee.findById(req.params.id);
			if (!employee) {
				return res.status(200).json({
					message: 'There is no employee with this id ...',
					status: 400,
					data: null
				});
			}
			Object.assign(employee, {
				comment: req.body.comment,
				checkIn: moment().format('YYYY-DD-MM HH:mm:ss')
			});
			let updated = await employee.save();
			if (updated) {
				return res.status(200).json({
					message: 'updated successfully...',
					status: 200,
					data: employee
				});
			}
		} catch (error) {
			console.log(error);
			return res.status(200).json({
				message: 'Server Error ...',
				status: 400,
				data: null,
				Error: error
			});
		}
	},
	CheckOut: async (req, res) => {
		try {
			const employee = await Employee.findById(req.params.id);
			if (!employee) {
				return res.status(200).json({
					message: 'There is no employee with this id ...',
					status: 400,
					data: null
				});
			}

			Object.assign(employee, {
				comment: req.body.comment,
				checkOut: moment().format('YYYY-DD-MM HH:mm:ss'),
				absentFor: moment.utc(moment().diff(moment(employee.checkIn, 'YYYY-DD-MM HH:mm:ss'))).format('HH:mm:ss')
			});
			let updated = await employee.save();
			if (updated) {
				return res.status(200).json({
					message: 'updated successfully...',
					status: 200,
					data: employee
				});
			}
		} catch (error) {
			console.log(error);
			return res.status(200).json({
				message: 'Server Error ...',
				status: 400,
				data: null,
				Error: error
			});
		}
	}
};
