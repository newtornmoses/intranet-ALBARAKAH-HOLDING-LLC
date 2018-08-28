const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const mongoose = require ('mongoose');
const Port  = process.env.PORT || 3000;
const mongoXlsx = require('mongo-xlsx');

//const factory = require('./factory/factory');


// connect mongoose
//   mongoose.connect('mongodb://localhost:27017/intranet' );

// conncet to mongolab
 mongoose.connect('mongodb://mozeking:palace4x4@ds119652.mlab.com:19652/itranet');
  // check for connection
    mongoose.connection.on('open', () => {
        console.log('connected to mongoose database');
    });

// routes routes
const users = require('./routes/users'); 
const departments = require('./routes/departments');   
const firstAid = require('./routes/firstaid');
const saftey = require('./routes/saftey');
const takreem = require('./routes/takreem');
const biometric = require('./routes/biometric');
// Cors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin" , '*');
    res.header("Access-Control-Allow-Headers", "Orign, Content-Type, X-Requested-With, Authorization, Accept");
    
    if (res.header === 'OPTIONS') {
    res.headers("Access-Control-Allow-Methods", "GET, PUT, PATCH, DELETE, POST");
    res.sendStatus(200).json({});
               
    }
    next();
});
// middle ware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

// app.use(express.static(__dirname, "../dist/index.html"));


// routes
 app.use('/users', users);
 app.use('/departments', departments);
app.use('/firstaid', firstAid);
app.use('/saftey', saftey);
app.use('/takreem', takreem);
app.use('/biometric', biometric);
  //  listen to server
app.listen(Port , () => {
    console.log('server running on  port ' + Port);
});
