var express = require('express');
var myApp = express();
var bodyparser = require('body-parser');
var passport = require('./config/security');
myApp.use(bodyparser.urlencoded({ extended: true }));
myApp.use(bodyparser.json());
myApp.use(express.static('public'));


var fingerprint = require('./models/fingerprint');
var lobeType = require('./models/lobe');
var quotient = require('./models/quotient');
var multipleIntelligence = require('./models/multipleIntl');
var user  =require('./models/user');


myApp.get('/greet', function (req, res) {
    fingerprint.find({}, function (err, prints) {
        if (!err) {
            res.json(prints);
            console.log(prints);
        }
        else {
            res.send('could not retrieve data');
        }
    })
});

myApp.get('/lobetype', function (req, res) {
    lobeType.find({}, function (err, data) {
        if (!err) {
            res.json(data);
            console.log(data);
        }
        else {
            res.send('could not retrieve data');
        }
    })
});

myApp.get('/quotetype', function (req, res) {
    quotient.find({}, function (err, quote) {
        if (!err) {
            res.json(quote);
            console.log(quote);
        }
        else {
            res.send('could not retrieve data');
        }
    })
});

myApp.get('/multiple', function (req, res) {
    multipleIntelligence.find({},function (err, midata) {
        if(!err){
            res.json(midata);
            console.log(midata);
        }
        else {
            res.send('could not retrieve data');
        }
    })
});

//data input through user

myApp.post('/save', function (req, res) {
    var u = new multipleIntelligence({
        name_id: req.body.name_id,
        name:req.body.name
    });
    u.save(function (err) {
        if(!err){
            console.log("Data Saved in DB");
            res.send('Got a POST request');
        }
        else {
            res.send({success: false });
        }
    })
});

// user Registration

myApp.post('/registerData', function (req, res) {
    var u = new multipleIntelligence({
        username: req.body.username,
        password:req.body.password
    });
    u.save(function (err) {
        if(!err){
            console.log("Data Saved in DB");
            res.send('Got a POST request');
        }
        else {
            res.send({success: false });
        }
    })
});

myApp.post('/register', function (req, res) {
   var data = new user({
       firstname: req.body.firstname,
       lastname: req.body.lastname,
       username: req.body.username,
       password: req.body.password
   })  ;
   data.save(function (err) {
       if(!err){
           console.log("User registered Successfully");
           res.contentType('Conent-Type', "application/json");
           res.send(JSON.stringify({
               success: true,
               data:"User saved Successfully"
           }));
       }
       else {
           res.send({success:false, error:err.message})
       }
   })
});


// Search data by ID

myApp.get('/greet/:id', function (req, res) {
    var id = req.params.id;
    fingerprint.find({'name_id':id}, function (err, printsById) {
        if (!err) {
            res.json(printsById);
            console.log(printsById);
        }
        else {
            res.send('could not retrieve data');
        }
    })
});

//var a = require('./models/multipleIntl');


// images saved into DB
// myApp.get('/img', function (req, res) {
//     a.find({}, function (err, pics) {
//         if (!err) {
//             res(pics);
//             console.log(pics);
//         }
//         else {
//             res.send('could not retrieve data');
//         }
//     })
// });

// var isAuthenticated = function (req, res, next) {
//     if (req.isAuthenticated())
//         return next();
//     res.redirect('/');
// };

myApp.post('/login',
    passport.authenticate('local', { successRedirect: '/',
        failureRedirect: '/login' }));

var port = 3030;
myApp.listen(port, function () {
    console.log("Server is listing on port: " + port)
});
