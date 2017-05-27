var mongoose = require('../config/db');

var Schema = mongoose.Schema;

var quotientSchema = new Schema({
    name: String,
    description: String
});

var quotient = mongoose.model('quotient', quotientSchema);

// var quotient = new quotientType({name: 'Adversity Quotient (AQ)', description:"Adversity Quotient® (AQ) is about how you respond to life, especially the tough stuff. It is a gauge or measure of how you respond and deal with everything, from everyday hassles to the big adversities that life can spring on you. It is also an established science, theory, and approach for becoming measurably more resilient. The more resilient you are, the more effectively and constructively you respond to life’s difficulties, and the more fulfilling life becomes."});
// quotient.save(function (err) {
//     if(err){
//         return err
//     }
//     else {
//         console.log('quotientType save');
//     }
// });

module.exports = quotient;