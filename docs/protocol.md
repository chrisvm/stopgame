MultiplayerProtocol
===================

In here we define the different messages and data for those messages. All messages 
follow `socket.send(message, opts)` where 


| Name | Type | Description |
| ---- | ---- | ----------- |
| message | string | the header of the message to the server |
| opts | object | a javascript object with the data for the server to work on |


All communication from server to client and reverse follow this message structure. 

### Custom Types 

#### StatusCode

The status code of a response message. 

| Property | Type | Description | 
| -------- | ---- | ----------- |
| code | int | the integer code |
| short | string | the string with a more expressive code | 
| error | string | if status is not `200|ALL_OK`, this property will have a error messsage. Otherwise empty | 

The property `StatusCode.short` won't differ from `StatusCode.code` in the response status, they only differ in
the expressivenes of its use. Using the `short` is more expressive than `code`
    
Using `code`

    if (opts.status.short == 'ALL_OK') {
        ...

is more expressive than 
    
    if (opts.status.code == 200) {
        ...

Different Status 

| Code | Short | Description |
| ---- | ----- | ----------- |
| 200 | ALL_OK | The Message was correctly recieved and processed |
| 400 | MISSING_OPTS | Options missing that are needed for the process of the message |
| 500 | ENGINE_ERROR | Error in the execution of the message |

## Message Types 

Here all the different types of messages, separated by domain 


### Users 

____

`user auth_username` 

#### Opts

| Property | Type | Description |
| -------- | ---- | ----------- |
| username | string | the username to auth |

#### Return Message 

`user auth_username_response`

#### Opts 

| Property | Type | Description |
| -------- | ---- | ----------- |
| username | string | the username authed | 
| status | StatusCode | the status of the response | 

____

