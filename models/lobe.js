var mongoose = require('../config/db');

var Schema = mongoose.Schema;

var lobeTypeSchema = new Schema({
   name: String,
    description: String
});

var lobeType = mongoose.model('lobetype', lobeTypeSchema);

// var lobe = new lobeType({name: 'Prefrontal Lobe', description:"The Prefrontal lobe is found to play an important role in problem solving, spontaneity, socialization. It helps in controlling, coordinating, planning, performing behavior creating personality expression and moderating social behavior. People having damaged prefrontal lobe experience problems such as having behavior disorders, difficulty in learning new information."});
// lobe.save(function (err) {
//     if(err){
//         return err
//     }
//     else {
//         console.log('LobeType save');
//     }
// });

module.exports = lobeType;