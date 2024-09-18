const employeeService = require("../services/employeeService");

class EmployeeController {
	async getAllEmployees(req, res) {
		const employees = await employeeService.getAllEmployees();
		
		res.status(employees.code).json(employees);
	}
	async getEmpoyeeById(req, res) {
		const employee = await employeeService.getEmployeeById(req.params.id);

		res.status(employee.code).json(employee);
	}
	async createEmployee(req, res) {
		const newEmployee = await employeeService.createEmployee(req.body);

		res.status(newEmployee.code).json(newEmployee);
	}
	async updateEmployee(req, res) {
		let id = req.params.id;
		let employeeData = req.body;

		const updatedEmployee = await employeeService.updateEmployee(
			id,
			employeeData
		);

		res.status(updatedEmployee.code).json(updatedEmployee);
	}

	async deleteEmployee(req, res) {
        const deletedEmployee = await employeeService.deleteEmployee(req.params.id);
        
		res.status(deletedEmployee.code).json(deletedEmployee);
	}
}

module.exports = new EmployeeController();
