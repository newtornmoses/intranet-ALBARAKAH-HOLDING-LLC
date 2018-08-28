const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Users = require('../model/users');

const jwt = require('jsonwebtoken');

// get all users
router.get('/', (req, res) => {
    Users.find()
        .exec()
        .then(data => {
            res.json({
                count: data.length,
                users: data
            });
        });
});


// get single user
router.get('/user/:id', (req, res) => {
    Users.findById({_id: req.params.id}, (err, user) => {
        if(err) {

        res.json('an error occured')
        }
        if(user) {
            res.json(
                user
            );
        }
    });
});


// sign up
router.post('/signup', (req, res) => {
    // check if user exists
    Users.findOne({Email: req.body.email}, (err, found_user) => {
        if(err) {
            res.json(err)
        }

        if(found_user) {
            res.json({
                msg: 'sorry user already exists!!! \n please check your email'
            });
        } else {
            const user = new Users();
                user.UserName = req.body.username;
                user.LoginName = req.body.LoginName;
                user.Password = req.body.password;
                user.Email = req.body.email;
                user.DepartmentCode = req.body.DepartmentCode;
                user.EmployeeID = req.body.id;
                user.UserLevel = req.body.UserLevel;
                user.PCName = req.body.PCName;
                user.IsValid = req.body.IsValid;
                user.PCLogin = req.body.PCLogin;
                user.IsSafety = req.body.IsSafety;
                user.AppovedBy = req.body.AppovedBy;
                user.AppPCName = req.body.AppPCName;

                if (user) {
                    user.save((err, newUser) => {
                        if (err) {
                            res.json(err)
                        }

                        if (newUser) {
                            res.json(newUser)
                        }

        })
    }
        }


    })
    
});



// login
router.post('/login', (req, res) => {

    Users.findOne({ 'EmployeeID': req.body.id }, (err, user) => {
        if (err) {
            res.json(err);
        }

        if (!user) {
            res.json({msg:'no user found'});
        }

        if(user) {
        

        if (user.Password === req.body.password) {
            const auth = {
                EmployeeID: req.body.id,
                Password: req.body.password
            }
            const token = jwt.sign(auth, 'secrete')
            res.json({
                user: user,
                token: token
            });

        } else {
            res.json({
                msg: 'passwords don\'t\ match'
            })
        }
            
    }
    })
});

  // delete user 

  router.delete('/delete/:id', (req, res) => {
    Users.findByIdAndRemove({_id: req.params.id}, (err , user) => {
        if(err) {
            res.json('error ,please try again')
        }

        
                res.json({
                    msg: 'successfully deleted user'
                });
            
            
        
    })
} )







// edit user
 router.put('/edit/:id', (req, res) => {
         Users.findById({_id: req.params.id}, (err, user) => {
             if(err) {
                 res.json('an error occured')
             }
             if(user) { 
                 const  editUser = {
                  UserName :req.body.username,
                    LoginName :req.body.LoginName,
                    Password : req.body.Password,
                    Email : req.body.email,
                    DepartmentCode : req.body.DepartmentCode,
                    EmployeeID : req.body.id,
                    UserLevel : req.body.UserLevel,
                    PCName :req.body.PCName,
                    IsValid : req.body.IsValid,
                    PCLogin :req.body.PCLogin,
                    IsSafety : req.body.IsSafety,
                    AppovedBy: req.body.AppovedBy,
                    AppPCName :req.body.AppPCName
                 } 

                 Users.findByIdAndUpdate({_id:req.params.id} , {$set: editUser}, (err , edited_user) => {
                       if(err) {
                           res.json(err)
                       }
                       if(edited_user) {
                           Users.findById({_id:req.params.id}, (err, user) => {
                            if(err) {
                                res.json(err)
                            }     

                            if(user) {
                                    res.json({
                                        success: true,
                                        data: user
                                    });
                                }
                           })
                           
                       }
                 } )

             
         }
         });
        })


       

module.exports = router;