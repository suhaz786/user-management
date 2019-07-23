var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var user_controller = require('../controllers/user');

// a simple test url to check that all of our files are communicating correctly.
router.get('/users/about', user_controller.about);

router.post('/users/create', user_controller.user_create);

router.get('/users/:id', user_controller.user_details);

router.put('/users/:id', user_controller.user_update);

router.delete('/users/:id', user_controller.user_delete);

router.get('/users/', user_controller.user_findAll);

router.get('/users/elastic', user_controller.es_searchAll)

module.exports = router;