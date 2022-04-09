const mongoose = require('mongoose');

var Employee = mongoose.model('Employee',{
    name: {type: String},
    email: {type: String},
    contactno :{ type: String},
    dateofbirth: {type: Date},
    sex: {type:String}
});

module.exports = {
    Employee: Employee
};