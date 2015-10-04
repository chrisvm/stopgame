mongoose = require('mongoose')

UserSchema =
    name: "User"
    schema: new mongoose.Schema(
        username: String
    )


RoomStateSchema =
    name: "RoomState"
    schema: new mongoose.Schema(
        current_letter: String
        running: Boolean
    )

RoomSchema =
    name: "Room"
    schema: new mongoose.Schema(
        name: String
        created_by: [UserSchema.schema]
        users: [UserSchema.schema]
        ready: [UserSchema.schema]
        state: [RoomStateSchema.schema]
        num_players: Number
    )

RoomSchema.schema.methods.getRef = () ->
    return (
        name: this.name
        size: this.num_players
        id: this._id
    )

module.exports = [
    UserSchema,
    RoomStateSchema,
    RoomSchema
];
