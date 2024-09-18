const employeeRepository = require("../repositories/employeeRepository");
const responseFormat = require("../utils/responseFormat");

class EmployeeService {
	async getAllEmployees() {
		try {
			const employees = await employeeRepository.findAll();

			return responseFormat("Success get all employees", employees);
		} catch (error) {
			console.log(error);
			return responseFormat("Internal Server Error");
		}
	}

	async getEmployeeById(id) {
		try {
			// validation
			const idParsed = Number(id);
			if (!idParsed) {
				throw "id must be a number";
			}

			const employee = await employeeRepository.findById(id);

			if (!employee) {
				throw "Employee not found";
			}

			return responseFormat("Success get employee by id", employee);
		} catch (error) {
			return responseFormat(error, null, 404, "failed");
		}
	}

	async createEmployee(employeeData) {
        try {
            // validation
            if (!employeeData.name) {
                throw "Name cannot be empty"
            } 
            
            if (!Number(employeeData.age)) {
                throw "Age must be a number"
            } 

			const [employee, isNew] = await employeeRepository.create(employeeData);
			if (!isNew) {
				throw "Employee already exist";
			}
			return responseFormat("Success create new employee", employee);
		} catch (error) {
			return responseFormat(error, null, 400);
		}
	}

	async updateEmployee(id, employeeData) {
		try {
			// validation
			const idParsed = Number(id);
			if (!idParsed) {
				throw "id must be a number";
			}

			const affectedCount = await employeeRepository.update(
				idParsed,
				employeeData
			);

			if (!affectedCount) {
				throw "Failed to update data employee";
			}

			return responseFormat("Success update data employee");
		} catch (error) {
			return responseFormat(error, null, 400);
		}
	}

	async deleteEmployee(id) {
		try {
			// validation
			const idParsed = Number(id);
			if (!idParsed) {
				throw "id must be a number";
			}

			const affectedCount = await employeeRepository.delete(id);

			if (affectedCount == 0) {
				throw "Failed to delete data employee";
			}

			return responseFormat("Success delete data employee");
		} catch (error) {
			return responseFormat(error, null, 400);
		}
	}
}

module.exports = new EmployeeService();
