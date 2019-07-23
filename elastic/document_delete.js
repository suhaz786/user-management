var cliesClientent = require('../elastic_config/connection');

esClient.delete({
    index: 'users',
    id: '1',
    type: 'employee'
}, function(err, resp, status) {
    console.log(resp);
})