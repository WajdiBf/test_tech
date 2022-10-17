const EmployeeRoutes = require('express').Router();
const { employeesController } = require('../controllers');
const { employeesValidations, validateEmployeeId } = require('../validation');
const { validateRegisterInput } = require('../validation/employee.validations');

EmployeeRoutes.route('/:created_date?').post(validateRegisterInput, employeesController.createNewEmployee).get(employeesController.getAllEmployees);

EmployeeRoutes.route('/check-in/:id').put(validateEmployeeId, employeesController.CheckIn);

EmployeeRoutes.route('/check-out/:id').put(validateEmployeeId, employeesController.CheckOut);

module.exports = EmployeeRoutes;
