const router = require("express").Router();

const employeeController = require("../controllers/employeeController");

router.get("/", employeeController.getAllEmployees);
router.get("/:id", employeeController.getEmpoyeeById);
router.post("/", employeeController.createEmployee);
router.put("/:id", employeeController.updateEmployee);
router.delete("/:id", employeeController.deleteEmployee);

module.exports = router;
