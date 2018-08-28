const mongoose = require('mongoose');
const takreemSchema = mongoose.Schema({
    
idea: {type: String, required: true},
email: {type: String, required: true},
name: {type: String, required: true},
part_of: {type: Boolean, required: true},
ideaWill: {
    CustomerExperience: {type: Boolean, required: true},
    betterQuality: {type: Boolean, required: true},
    saveMoney: {type: Boolean, required: true},
    saveTime: {type: Boolean, required: true},  
}


},
{ timestamps: { createdAt: 'created_at' }}
);


module.exports = mongoose.model('Takreem', takreemSchema);