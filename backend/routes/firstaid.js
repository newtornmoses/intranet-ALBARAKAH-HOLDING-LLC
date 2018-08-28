const express = require('express');
const router = express.Router();
const FirstAid = require('../model/firstaid_details');
const Hospitals = require('../model/SFT_hospitals');
const Drivers = require('../model/sf_drivers');
const officers = require('../model/sf_officers');
const Departments = require('../model/department');
const Companies = require('../model/sf_companies');


// get all data
router.get('/', (req, res) => {
    FirstAid.find({}, (err , data) => {
        if(err) 
             res.json(err)

        if(data)
             res.json({
               
                 data: data})     
    })
   
});

// get latest data
router.get('/latest' , (req, res) => {
    FirstAid.find({})
              .sort({InsertTime: -1})
              .limit(100)
              .then(data => {
                  res.json({
                      count: data.length,
                      data: data
                  })
              });
});



//get data by serial number
router.post('/search', (req, res) => {
     FirstAid.findOne({SerNo: req.body.serial} , (err, data) => {
         if(err)
              res.json(err)
         
         if(data)
              res.json(data); 
         else
            res.json({
                msg: 'invalid serial number'
            })         

})
});



// get data by inserted by
router.post('/data', (req, res) => {
    FirstAid.find({InsertBy: req.body.creator})
              .sort({InsertTime: -1})
              .limit(50)
              .then(data => {
                  res.json({
                      count: data.length,
                      data:data});
              })
              .catch(err => res.json(err));

});

// get data by year
router.post('/year', (req, res) => {
    FirstAid.find({InsertTime: new RegExp(req.body.year)})
     .then(data=> {
         res.json(data)
     })
     .catch(err => res.json(err))


});

// create new report
router.post('/addReport', (req, res) => {
    // find lattest entry
    FirstAid.findOne()
           .sort({InsertTime: -1})
           .then(data => {
           
     const newForm = new FirstAid();
     newForm.SerNo = data.SerNo+1;
     newForm.FASerNo = data.FASerNo.slice(0, 3) + ((data.SerNo+1).toString()).padStart(6, "0");
     newForm.LocationNo = req.body.LocationNo;
     newForm.ReportDate = req.body.ReportDate;
     newForm.ReportTime = req.body.ReportTime;
     newForm.TypeNo = req.body.TypeNo;
     newForm.CompanyCode = req.body.CompanyCode;
     newForm.CompanyName = req.body.CompanyName;
     newForm.DepartmentCode = req.body.DepartmentCode;
     newForm.IDNumber = req.body.IDNumber;
     newForm.ResidentName = req.body.ResidentName;
     newForm.Complaint = req.body.Complaint;
     newForm.Diagnosis = req.body.Diagnosis;
     newForm.Treatment = req.body.Treatment;
     newForm.HospitalCode = req.body.HospitalCode;
     newForm.PatientContactNo = req.body.PatientContactNo;
     newForm.DriverCode = req.body.DriverCode;
     newForm.OfficerCode = req.body.OfficerCode;
     newForm.Designation = req.body.Designation;
     newForm.IsDuty = req.body.IsDuty;
     newForm.IsWorkRelated = req.body.IsWorkRelated;
     newForm.InsertBy = req.body.InsertBy;
     newForm.InsertTime = Date.now();
    

     if(newForm) {
         newForm.save((err, newReport) => {
             if(err) {
                 res.json(err)
             }

             if(newReport) {
                 res.json({
                     status: 'success',
                     data: newReport
                 });
                 console.log(newReport);
             }
         })
     }
})


.catch(err => res.json(err))
});


// get hospital data
router.get('/user_data', (req, res) => {
    Hospitals.find()
    .exec()
    .then(hospital_data => {
      officers.find()
        .exec()
        .then(officer_data => {
            Departments.find()
            .sort({'DepartmentName': -1})

                   .exec()
                   .then( department_data => {
                       Drivers.find()
                         .exec()
                         .then(drivers_data => {
                             Companies.find()
                             .exec()
                             .then(company_data => {
                                res.json({
                                    hospital: hospital_data,
                                    department: department_data,
                                    officers:officer_data,
                                    driver: drivers_data,
                                    company: company_data
                                })

                             })
                            
                         })
                   })
        })
    })
    .catch(err => res.json(err));
   
});



//  get data by location, year , patient type

router.post('/getData', (req, res) => {
    FirstAid.find({'InsertTime': {$gt : req.body.InsertTime}})
     .where('LocationNo' , req.body.LocationNo)
     .where('TypeNo' , req.body.TypeNo)
    .then(data => {
       
       
        
        if (data) {
            res.json({
                count: data.length,
                data:data
            });
        }
    
      })
       
    .catch(err => console.log(err))
   
})

module.exports = router;