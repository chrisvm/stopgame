Stop Game
=========

![GitHub Logo](/public/images/StopLogo_300x300.png)

## Dependencies

- Ruby + SASS for the styling of the whole app
- Python3 + mkdocs for the documentation
- Node.js + npm for the installation of the server side Dependencies
- Bower for the intallation of front-end frameworks
- (optional) pm2 globally installed for serving the app with auto-reload

## Install

To install, just run

	npm install
	bower install
	grunt init

in the root directory

## Usage

To serve the webapp, just run `/bin/www` with node

	node bin/www

This will start the webapp in localhost:3000 if no PORT variable is set.

The application can be served from pm2, there's a app/json file describing the process. Just run this line

	pm2 start pm2.json

on the root dir of the project.

## Made With

- [node.js](https://nodejs.org/en/)
- [expressjs](http://expressjs.com/)
- [socket.io](http://socket.io/)
- [mkdocs](http://www.mkdocs.org/)
- [Freebase](https://www.freebase.com/)
- [bootstrap](http://getbootstrap.com/)
- [jade](http://jade-lang.com/)
- [mongoose](http://mongoosejs.com/)
- [grunt](http://gruntjs.com/)
- [CoffeScript](http://coffeescript.org/)

____

### v0.2

- Starting Room creation and display
- user creation (roughtly) works
