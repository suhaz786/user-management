var esClient = require('../elastic_config/connection');

esClient.index({
    index: 'users',
    id: '1',
    type: 'employee',
    body: {
        "id": "1",
        "name": "Yash",
        "age": 10
    }
}, function(err, resp, status) {
    console.log(resp);
})