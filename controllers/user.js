var User = require('../models/user');
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
    res.send('Greetings from the User Management REST API!');
};

exports.user_create = function (req, res, next) {
    var user = new User(
        {
            name: req.body.name,
            age: req.body.age
        }
    );

    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('User Created successfully')
    })
};

exports.user_details = function (req, res, next) {
    User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};

exports.user_update = function (req, res, next) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) return next(err);
        res.send('User udpated.');
    });
};

exports.user_delete = function (req, res, next) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

exports.user_findAll = function (req, res, next) {
    User.find().then(result => {
        res.send(result);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error while searching users."
        });
    });
};

exports.es_searchAll = function(req, res, next) {
    client.search({
        index: 'users',
        body,
    }).then(result => {
        res.send(result);
    }).catch(err => {
        message: err.message || "Error while reading from elastic."
    });
};