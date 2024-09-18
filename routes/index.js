const router = require("express").Router();
const responseFormat = require("../utils/responseFormat");
const employeeRouter = require("./employeeRouter");

router.get("/", (req, res) => {
	res.status(200).json(responseFormat("Hello, World!"));
});

// employee
router.use("/employees", employeeRouter);

module.exports = router;
