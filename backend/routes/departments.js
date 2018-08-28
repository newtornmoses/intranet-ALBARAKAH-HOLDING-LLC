const express = require('express');
const router =  express.Router();
const Dept = require('../model/department');


// get all departments
router.get('/', (req, res) => {
    Dept.find({})
         .exec()
         .then(data => {
             res.json({
                 result: data
             })
         })
})




module.exports = router;