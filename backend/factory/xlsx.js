const express = require('express');
const router = express.Router;
const mongoXlsx = require('mongo-xlsx');
const path = require('path');
const fs = require('fs');
const model = null;
const User = require('../model/users');
mongoXlsx.xlsx2MongoData(path.join(__dirname, 'data.xlsx'),model, function(err, data) {
    
    if(data) {
       
        for (let i = 0; i < data.length; i ++) {
            console.log(data[i].UserName);
        }
        // const user = new User();
       // user.UserName = data.

       

    }

    if (err) {
        console.log(err);
    }
})








module.exports = router;