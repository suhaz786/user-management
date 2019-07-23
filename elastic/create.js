var esClient = require('../elastic_config/connection');

//create a index. (index is a place to store related documents.)
esClient.indices.create({
    index: 'library'
}, function(err, resp, status) {
    if (err){
        console.log(err);
    } else {
        console.log("create", resp);
    }
});