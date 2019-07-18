var client = require('./connection');

//delete an index
client.indices.delete({index: 'users'},function(err,resp,status) {  
  console.log("delete",resp);
});