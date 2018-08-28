const mongoose = require('mongoose');
const mongoXlSX = require('mongo-xlsx');
const path = require('path');
const SftHospitals = require('../model/takreem');
const model = null;


// connect mongoose
//mongoose.connect('mongodb://localhost:27017/intranet');
// check for connection
// mongoose.connection.on('open', () => {
//     console.log('connected to mongoose database');
// });


mongoXlSX.xlsx2MongoData(path.join(__dirname, 'data3.xlsx'), model, (err, data) => {
    if (err) { // check for errors
        console.log(err);
    }

    if (data) { // check if theres data

        console.log(data.length);


        data.forEach(elem => {
            

            const department = new SftHospitals();
            
            // department.UpdateTime = Math.round((elem.UpdateTime -25569)*86400*1000);
            department.SiteID = elem.SiteID;
            department.SiteName = elem.SiteName;
           // department.Report_TypeDescription = elem.Report_TypeDescription;
                   

            // save user
            department.save((err, newSite) => {
                if (err) {
                    console.log(err);
                }

                if (newSite) {
                    console.log(newSite);
                }
            })
        });
    }
});