const mongoose = require('mongoose');
const sfHospitaShema = mongoose.Schema({
    Hospitalcode: {type:Number, required: true},
    Hospitalname: {type: String, required: true}
});

module.exports = mongoose.model('SftHospitals', sfHospitaShema);