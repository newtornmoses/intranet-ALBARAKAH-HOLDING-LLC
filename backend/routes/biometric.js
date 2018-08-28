const express = require('express');
const router = express.Router();
const sql = require('mssql')
const xlsx = require('mongo-xlsx');       


router.post('/', function (req, res) {
   

    // config for your database
    var config = {
        user: 'sa',
        password: 'sql@pu79pa76',
        server: '192.168.2.249', 
        database: 'TNASoft' ,
        port: 1433
    };

    // sql.close()

    //connect to your database
   const conn= sql.connect(config, function (err, dataSeen) {
    
        if (err) {
            console.log(err);
        }
         else {
            console.log('connected to mssql');
            
        
     
       
      
        
        // create Request object
        const request = new sql.Request();
           const userId = req.body.userId;
           const date = req.body.date.slice(0, 10);

        // query to the database and get the records
        // select * from trans_processed where Emp_ID = \'TH11363\' AND PDate BETWEEN \'2018-07-01T00:00:00.000Z\' AND \'2018-08-08T00:00:00.000Z\'
        // select top 100 * from employee
        //select top 100 * from trans_processed order by PDate desc
        // select top 10 * from trans_processed where Emp_ID = \'TH11365\' ORDER BY PDate desc
        // select TOP 1 * from trans_processed where Emp_ID = \'TH11363\' AND PDate = \'2018-08-05T00:00:00.000Z\' 
         request.query(`select top 1 * from trans_processed where Emp_ID = \'${userId}\' AND PDate =\'${date} \' ` , function (err, data) {
                  sql.close();
              
            if (err) console.log(err)
               
           if(data)
           {
         
            
            res.json(data)

           }else{
               res.json(err)
           }
          
        
            });
            console.log(date, userId);
        }
           
});



});


// get data by dates
router.post('/dataBtnDates', function (req, res) {
   

    // config for your database
    var config = {
        user: 'sa',
        password: 'sql@pu79pa76',
        server: '192.168.2.249', 
        database: 'TNASoft' ,
        port: 1433
    };

    // sql.close()

    //connect to your database
   const conn= sql.connect(config, function (err, dataSeen) {
    
        if (err) {
            console.log(err);
        }
         else {
            console.log('connected to mssql');
            
        
     
       
      
        
        // create Request object
        const request = new sql.Request();
           const userId = req.body.userId;
           const date_1 = req.body.date_1.slice(0, 10);
           const date_2 = req.body.date_2.slice(0, 10);

      
         request.query(`select * from trans_processed where Emp_ID = \'${userId}\' AND PDate BETWEEN \'${date_1}\' AND \'${date_2}\' ` , function (err, data) {
                  sql.close();
              
            if (err) console.log(err)
               
           if(data)
           {
         
           
            
            res.json(data)

           }else{
               res.json(err)
           }
          
        
            });
            
        }
           
});



});

module.exports = router;