// config/connection.js
const { Sequelize } = require("sequelize");

const { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST } = process.env;

// Inisialisasi koneksi ke PostgreSQL menggunakan Sequelize
const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
	host: DB_HOST,
	dialect: "postgres",
	logging: false,
	define: {
		underscored: true,
		timestamps: true,
		createdAt: "created_at",
        updatedAt: "updated_at",
	},
});

// Fungsi untuk menguji koneksi
const testConnection = async () => {
	try {
		await sequelize.authenticate();
		console.log("Database connected.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
};

// Panggil fungsi untuk menguji koneksi
testConnection();

module.exports = sequelize;
