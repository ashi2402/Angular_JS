var mongoose = require('../config/db');

var Schema = mongoose.Schema;

var fingerPrintSchema = new Schema({
    name_id: Number,
    name: String
});

var fingerprint = mongoose.model('fingerprint', fingerPrintSchema);

// to save data into DB

// var firstprint = new fingerPrint({name_id:103, name:"Tented Arch(TA)"});
//
// firstprint.save(function (err) {
//     if(err){
//         return err
//     }
//     else {
//         console.log('firstprint save');
//     }
// });

module.exports = fingerprint;