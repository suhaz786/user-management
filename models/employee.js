var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoosastic = require('mongoosastic');

var EmployeeSchema = new Schema({
    name: {type: String, required: true, max: 100},
    age: {type: Number, required: true},
    contactNumber: {type: Number, required: false, max:13},
    address: {type:String, required: false, max: 100},
    email: {type:String, required: true, max: 256},
    manages: [[String]]
});

EmployeeSchema.plugin(mongoosastic, {
    "host": "localhost",
    "port": 9200
});

var Employee = mongoose.model('Employee', EmployeeSchema);

/**
 * Enable this block to verify mongodb connectivity by inserting a dummy record.*/
var newEmp = new Employee({
    name: 'Roger Federer',
    age: 20,
    email: 'roger@atp.org',
    address: 'Dubai, UAE',
    contactNumber: 971555582245,
    manages: ['suhas','nate']
});

newEmp.save((err) => {
    if(err) {
        console.log(err);
    }
    console.log('Employee added in both the databases');
})

newEmp.on('es-indexed', (err, result) => {
    console.log('indexed to elastic search');
});


// Export the model
module.exports = Employee;