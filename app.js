const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan")
const sequelize = require("./config/connection")

const router = require("./routes");

const PORT = process.env.PORT || 3000;

// logging 
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", router);

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}/api`);
});
