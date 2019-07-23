var esClient = require('../elastic_config/connection');

//delete an index
esClient.indices.delete({index: 'users'},function(err,resp,status) {  
  console.log("delete",resp);
});