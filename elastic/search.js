var esClient = require('../elastic_config/connection');

esClient.search({
    index: 'users',
    type: 'employee',
    body: {
        query: {
            match: {
                "id": "1"
            }
        }
        /**
         * query: {  
            wildcard: { "constituencyname": "???wich" }
            }
         */
    }
}, function(err, resp, status) {
    if (err) {
        console.log("search error :")
    } else {
        console.log("--- Response ---");
        console.log(resp);
        console.log("--- Hits ---");
        resp.hits.hits.forEach(function(hit){
          console.log(hit);
        })
    }
});