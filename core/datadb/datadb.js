var mongoose = require('mongoose');

// db constants
MONGODB_SERVER = 'mongodb://52.88.157.123/stop';

function DataDB() {
    // set mongoose reference
    this.mongoose = mongoose;

    // set empty models
    this.models = {};

    // connect to the server
    mongoose.connect(MONGODB_SERVER);

    // set event handlers
    var _this = this;
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function (callback){
        // set models
        _this.set_models();
    });
}

DataDB.prototype.set_models = function () {
    // get the schemas
    var schemas_array = require('./models_schema');

    // for each one, create a model and add it to this.models
    for (var index = 0; x < schemas_array.length(); index++) {
        // create model
        var schema_def = schemas_array[index];
        var schema = this.mongoose.Schema(schema_def.schema);
        var model = this.mongoose.model(schema_def.name, schema);

        // add to this.models
        this.models[schema_def.name] = model;
    }
};

module.exports = DataDB;
