const mongoose = require('mongoose');
const site_Shema = mongoose.Schema({
    SiteID: { type: Number, required: true, unique: true },
    SiteName: { type: String, required: true, unique: true },

});

module.exports = mongoose.model('Site', site_Shema);