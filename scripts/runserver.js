/*

Sets up a node.js server that uses the Connect middleware framework for providing providing access to the static content in the public directory.

Due to standard browser security setup XMLHTTPRequests via file:/// are not possible and thus some parts of the application would not work.


USAGE:

Setup:
$ cd scripts
$ npm install connect
Make the 'dir' variable mentioned below point to the correct directory

Run:
$ node runserver.js

Access application:
Start browser and navigate to
http://localhost:8080/index.html

*/

// CHANGE THIS TO POINT TO THE CORRECT PATH
var dir = '/Users/eero/sc5/skeletor/skeletor/public/';

var connect = require('connect');
connect.createServer(
    connect.static(dir)
).listen(8080);
