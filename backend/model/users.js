const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    UserName: { type: String, required: true },
    LoginName: { type: String, required: true },
    Password: { type: String, required: true },
    Email: { type: String, required: true },
    DepartmentCode: { type: Number, required: true },
    EmployeeID: { type: String, required: true },
    UserLevel: { type: Number, required: false, default: 4 },
    PCName: { type: String, required: false ,default: 'PCNAME'},
    IsValid: { type: Boolean, required: false },
    PCLogin: { type: String, required: false },
    InsertDate: { type: Date, required: false, default: Date.now() },
    AppovedBy: { type: String, required: false },
    AppPCName: { type: String, required: false },
    AppPCLogin: { type: String, required: false },
    AppInsertDate: { type: Date, required: false, default: Date.now() },
    IsSafety: { type: Number, required: false, default: 0 },



});


module.exports = mongoose.model('User', userSchema);