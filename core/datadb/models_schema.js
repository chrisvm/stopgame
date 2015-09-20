var mongoose = require('mongoose');

var UserSchema = {
    "name": "User",
    "schema": new mongoose.Schema({
        "username": String
    })
};

var RoomStateSchema = {
    "name": "RoomState",
    "schema": new Schema({

    })
};

var RoomSchema = {
    "name": "Room",
    "schema": new mongoose.Schema({
        "name": String,
        "users": [UserSchema.schema],
        "ready": [UserSchema.schema],
        "state": RoomState
    })
};
RoomSchema.schema.methods.getRef = function () {
    return {
        "name": this.name,
        "id": this._id
    };
};

module.exports = [
    UserSchema,
    RoomStateSchema,
    RoomSchema
];