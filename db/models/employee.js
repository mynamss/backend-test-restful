"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Employee extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Employee.init(
		{
			name: DataTypes.STRING,
			age: DataTypes.NUMBER,
			job_title: DataTypes.STRING,
			company: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Employee",
			tableName: "employees",
			underscored: true,
			timestamps: true,
			createdAt: "created_at",
			updatedAt: "updated_at",
		}
	);
	return Employee;
};
