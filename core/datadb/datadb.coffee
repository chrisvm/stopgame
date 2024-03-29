DataDB = () ->
    # set mongoose reference
    this.mongoose = require('./db_conn')

    # set empty models
    this.models = {}

    # set error event handlers and connect
    db = this.mongoose.connection
    db.on('error', console.error.bind(console, 'Mongo connection error:'))

    # init the models
    this.set_models()
    return

DataDB.prototype.set_models = () ->
    # get the schemas
    schemas_array = require('./models_schema')

    # for each one, create a model and add it to this.models
    for schema_def in schemas_array

        # create model
        schema = schema_def.schema
        model = this.mongoose.model(schema_def.name, schema)

        # add to this.models
        this.models[schema_def.name] = model
    return
    
module.exports = DataDB
