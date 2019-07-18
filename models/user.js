var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {type: String, required: true, max: 100},
    age: {type: Number, required: true},
});


// Export the model
module.exports = mongoose.model('User', UserSchema);