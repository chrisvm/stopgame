Schemas
=======

### User

| Property | Type | Description |
| -------- | ---- | ----------- |
| `username` | String | the username in the database |


### RoomState

| Property | Type | Description |
| -------- | ---- | ----------- |
| `current_leter` | String | the current letter in the game | 
| `running` | Boolean | if the game is running |


### Room 

| Property | Type | Description |
| -------- | ---- | ----------- |
| `name` | String | the name of the room, choosed by the creator |
| `created_by` | array(User) | the user who created the room |
| `users` | array(User) | the users inside the room |
| `ready` | array(User) | the users who are ready |
| `state` | array(RoomState) | the state of the room | 
| `num_players` | Number | the number of players in the room |

#### Room - methods

`getRef() -> return {}`

Returns a room reference, an object to get the room in the db

| Property | Type | Description |
| -------- | ---- | ----------- |
| `name` | String | the name of the room | 
| `size` | Number | the number of users on the room |
| `id` | String | the id of the room in the db | 