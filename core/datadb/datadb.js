function DataDB() {
    // set mongoose reference
    this.mongoose = require('./db_conn');

    // set empty models
    this.models = {};

    // set event handlers and connect
    var db = this.mongoose.connection;
    db.on('error', console.error.bind(console, 'Mongo connection error:'));
    this.set_models();
}

DataDB.prototype.set_models = function () {
    // get the schemas
    var schemas_array = require('./models_schema');

    // for each one, create a model and add it to this.models
    for (var index = 0; index < schemas_array.length; index++) {
        // create model
        var schema_def = schemas_array[index];
        var schema = schema_def.schema;
        var model = this.mongoose.model(schema_def.name, schema);

        // add to this.models
        this.models[schema_def.name] = model;
    }
};

module.exports = DataDB;
