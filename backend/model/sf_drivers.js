const mongoose = require('mongoose');
const Driver_Shema = mongoose.Schema({
    DriverCode: { type: Number, required: true},
    DriverName: { type: String, required: true},
      
});

module.exports = mongoose.model('Driver', Driver_Shema);