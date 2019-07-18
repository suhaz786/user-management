var client = require('./connection');

client.delete({
    index: 'users',
    id: '1',
    type: 'employee'
}, function(err, resp, status) {
    console.log(resp);
})