var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoosastic = require('mongoosastic');

var UserSchema = new Schema({
    name: {type: String, required: true, max: 100},
    age: {type: Number, required: true},
});

UserSchema.plugin(mongoosastic, {
    "host": "localhost",
    "port": 9200
});

var User = mongoose.model('User', UserSchema);

/**
 * Enable this block to verify mongodb connectivity by inserting a dummy record.
var newUser = new User({
    name: 'Roger Federer',
    age: 20
});

newUser.save((err) => {
    if(err) {
        console.log(err);
    }
    console.log('user added in both the databases');
})

newUser.on('es-indexed', (err, result) => {
    console.log('indexed to elastic search');
});
*/

// Export the model
module.exports = User;