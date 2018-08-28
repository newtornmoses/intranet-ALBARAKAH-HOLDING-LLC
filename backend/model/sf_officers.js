const mongoose = require('mongoose');
const Officer_Shema = mongoose.Schema({
    OfficerCode: { type: Number, required: true},
    OfficerName: { type: String, required: true},
      
});

module.exports = mongoose.model('Officer', Officer_Shema);