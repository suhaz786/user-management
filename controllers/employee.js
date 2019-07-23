var Employee = require('../models/employee');
var client = require('../elastic_config/connection')

//Simple version, without validation or sanitation
exports.about = function (req, res) {
    client.ping({
        requestTimeout: 30000
    }, function(err, resp, status){
        if (err) {
            console.log(err);
        } else {
            console.log('Elastic connectivity is ok')
        }
    })
    res.send('Greetings from the Employee Management REST API!');
};

exports.employee_create = function (req, res, next) {
    var employee = new Employee(
        {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
            contactNumber: req.body.contactNumber,
            address: req.body.address,
        }
    );

    employee.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Employee Created successfully')
    })
};

exports.employee_details = function (req, res, next) {
    Employee.findById(req.params.id, function (err, employee) {
        if (err) return next(err);
        res.send(employee);
    })
};

exports.employee_update = function (req, res, next) {
    Employee.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, employee) {
        if (err) return next(err);
        res.send('Employee udpated.');
    });
};

exports.employee_delete = function (req, res, next) {
    Employee.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

exports.employee_findAll = function (req, res, next) {
    Employee.find().then(result => {
        res.send(result);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error while searching Employees."
        });
    });
};

exports.es_searchAll = function(req, res, next) {
    client.search({
        index: 'employee',
        body,
    }).then(result => {
        res.send(result);
    }).catch(err => {
        message: err.message || "Error while reading from elastic."
    });
};