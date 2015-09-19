Roadmap
=======

This file splits the project in its different modules 

## `FreebaseAPI`

This module interacts with the Freebase api and provides methods for querying its database, 
topics and other data. 

## `DataDB`

Will hold methods for getting different types of data (users, games, etc), acting as a simple 
wrapper class between the application and the database (MongoDB)

## `MultiplayerEngine` 

Messages recieved from the client are forwarded to the engine which then are processed. 

## `BackEnd`

Compromises node.js express app arquitecture, which relegates the messages to the engine and back to 
the client. 


![Connections](http://localhost:3000/static/images/ModuleConnections.png)
