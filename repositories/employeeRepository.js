const { Employee } = require("../db/models");

class EmployeeRepository {
	constructor() {}

	async findAll() {
		const employees = await Employee.findAll();
		return employees;
	}

	async findById(id) {
		const employees = await Employee.findByPk(id);
		return employees;
	}

	async create(employeeData) {
		const newEmployee = await Employee.findOrCreate({
			where: { name: employeeData.name },
			defaults: { ...employeeData },
		});

		return newEmployee;
	}

	async update(id, employeeData) {
		const [affectedCount] = await Employee.update(
			{ ...employeeData },
			{
				where: {
					id: id,
				},
			}
		);
		return affectedCount;
	}

	async delete(id) {
		const affectedCount = await Employee.destroy({
			where: {
				id: id,
			},
		});

		return affectedCount;
	}
}

module.exports = new EmployeeRepository();
