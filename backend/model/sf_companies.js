const mongoose = require('mongoose');
const SfCompany_Shema = mongoose.Schema({
    CompanyCode: { type: Number, required: true},
    CompanyName: { type: String, required: true},
      
});

module.exports = mongoose.model('SfCompany', SfCompany_Shema);