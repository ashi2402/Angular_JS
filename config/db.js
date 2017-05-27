
var mongoose = require('mongoose');


//DB connection.
mongoose.connect('mongodb://localhost/DMIT');

// config = mongoose.connections;
// config.on('error', console.error.bind(console, 'connection error:'));
// config.once('open', function() {
//     // we're connected!
//     console.log('DB connected');
// });

 module.exports = mongoose;