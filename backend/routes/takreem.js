const express = require('express');
const router = express.Router();
const Takreem = require('../model/takreem');


// get all takreem Forms
router.get('/', (req, res) => {
    Takreem.find({}, (err, tak) => {
        if(err)
            res.json(err);
         
        if(tak)
            res.json(tak);
    });
})


// save takreem form
router.post('/add', (req, res) => {
    const newTakreem = new Takreem();
    newTakreem.idea = req.body.idea;
    newTakreem.email = req.body.email;
    newTakreem.name = req.body.name;
    newTakreem.part_of = req.body.part_of;
    newTakreem.ideaWill.CustomerExperience = req.body.ideaWill.CustomerExperience;
    newTakreem.ideaWill.saveMoney = req.body.ideaWill.saveMoney;
    newTakreem.ideaWill.saveTime = req.body.ideaWill.saveTime;
    newTakreem.ideaWill.betterQuality = req.body.ideaWill.betterQuality;
    newTakreem.part_of = req.body.part_of;

    newTakreem.save((err, savedTakreem) => {
        if(err)
            res.json(err);
        if(savedTakreem) 
             res.json({
                 msg: 'successfully added new takreem \n thanks for your idea, we realy appreciate',
                 takreem: savedTakreem
             });    
    });
});


module.exports = router;