var mongoose = require('../config/db');
var fs = require('fs');
var path = require('path');
var Schema = mongoose.Schema;

var multipleIntelligenceSchema = new Schema({
    name_id: Number,
    name: String
});


var multipleIntelligence = mongoose.model('multipleIntelligence', multipleIntelligenceSchema);


// to save data into DB

// var mi = new multipleIntelligence({ name_id: 101, name:"Bodily-kinesthetic"});
//
// mi.save(function (err) {
//     if(err){
//         return err
//     }
//     else {
//         console.log('mi save');
//     }
// });
module.exports = multipleIntelligence;

// // schema for image
// var img ="image/multiple-intelligence.png";
// var currentPath  = path.resolve(path.join(__dirname, "../public", img));
// var schema = new Schema({
//     img: { data: Buffer, contentType: String }
// });
//
// var A = mongoose.model('A', schema);
//
// //save image into DB
//
// var a = new A;
// a.img.data = fs.readFileSync(currentPath);
// a.img.contentType = 'image/png';
// a.save(function (err, a) {
//     if (err) throw err;
//     console.error('saved img to mongo');
// });


//module.exports = a;