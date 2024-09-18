const dotenv = require("dotenv");
dotenv.config();

const { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT } = process.env;

module.exports = {
	development: {
		port: DB_PORT,
		username: DB_USERNAME,
		password: DB_PASSWORD,
		database: DB_NAME,
		host: DB_HOST,
		dialect: "postgres",
		logging: false,
	},
	// test: {
	// 	username: "root",
	// 	password: null,
	// 	database: "database_test",
	// 	host: "127.0.0.1",
	// 	dialect: "mysql",
	// },
	// production: {
	// 	username: "root",
	// 	password: null,
	// 	database: "database_production",
	// 	host: "127.0.0.1",
	// 	dialect: "mysql",
	// },
};
