const mongoose = require('mongoose');
const firstAidShema = mongoose.Schema({
    SerNo: {type:Number, required: true},
    FASerNo: {type: String, required: true},
    LocationNo: {type: Number, required: true},
    ReportDate: {type: Date, required: true},
    ReportTime: {type: String, required: true},
    TypeNo: {type: Number, required: true},
    CompanyCode: {type: Number, required: true},
    CompanyName: {type: String, required: true},
    DepartmentCode: {type: Number, required: true},
    IDNumber: {type: String, required: true},
    ResidentName: {type: String, required: true},
    Complaint: {type: String, required: true},
    Diagnosis: {type: String, required: false},
    Treatment: {type: String, required: false},
    HospitalCode: {type: Number, required: true},
    PatientContactNo: {type: String, required: false},
    DriverCode: {type: Number, required: true},
    OfficerCode: {type: Number, required: true},
    Designation: {type: String, required: false},
    IsDuty: {type: Boolean, required: true, default: 0},
    IsWorkRelated: {type: Number, required: true, default: 0},
    InsertBy: {type: String, required: false},
    InsertTime: {type: Date, required: true},
    UpdateBy: {type: String, required: false},
    UpdateTime: {type: Date, required: true, default: Date.now()}

});

module.exports = mongoose.model('FirstAid', firstAidShema);