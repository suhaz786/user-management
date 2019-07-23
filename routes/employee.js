var express = require('express');
var router = express.Router();

var employee_controller = require('../controllers/employee');

// a simple test url to check that all of our files are communicating correctly.
router.get('/about', employee_controller.about);

router.post('/create', employee_controller.employee_create);

router.get('/:id', employee_controller.employee_details);

router.put('/:id', employee_controller.employee_update);

router.delete('/:id', employee_controller.employee_delete);

router.get('/', employee_controller.employee_findAll);

module.exports = router;