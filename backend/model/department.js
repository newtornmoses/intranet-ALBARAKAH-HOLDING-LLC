const mongoose = require('mongoose');
const department_schema = mongoose.Schema({
    DepartmentCode: { type: Number, required: true, unique: true },
    SiteID: { type: Number, required: true },
    DepartmentName: { type: String, required: true, unique: true }


});


module.exports = mongoose.model('Department', department_schema);