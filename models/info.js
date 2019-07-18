var client = require('./connection');

client.cluster.health({}, function(err, resp, status) {
    console.log("-- Client Health --", resp);
})

client.count({
    index: 'users', 
    type: 'employee'
}, function (err, resp, status) {
    console.log("users", resp);
});