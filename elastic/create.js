var client = require('./connection');

//create a index. (index is a place to store related documents.)
client.indices.create({
    index: 'users'
}, function(err, resp, status) {
    if (err){
        console.log(err);
    } else {
        console.log("create", resp);
    }
});