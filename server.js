var app = require('./app/config/express');

var port = process.env.PORT || 8080;        // set our port

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/nodeJsExpressProj:27017'); // connect to our database
var Bear     = require('./app/models/bear');


// START THE SERVER
// =============================================================================
//app.listen(port);
app.listen(port, () => {
    console.info(`server started on port ${port}`);
});
console.log('Magic happens on port ' + port);
