const mongoose = require('mongoose');
const patient_Shema = mongoose.Schema({
    TypeNo: { type: Number, required: true},
    TypeDescription: { type: String, required: true},
    Report_TypeDescription: { type: String, required: true },
      
});

module.exports = mongoose.model('Patient', patient_Shema);