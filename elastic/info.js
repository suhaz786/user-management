var esClient = require('../elastic_config/connection');

esClient.cluster.health({}, function(err, resp, status) {
    console.log("-- Client Health --", resp);
})

esClient.count({
    index: 'users', 
    type: 'employee'
}, function (err, resp, status) {
    console.log("users", resp);
});