var shell = require('shelljs');
var hapi = require('hapi');

var server = hapi.createServer('localhost', 9090);

var response = function (request, reply) {
  var command = request.query.command;
  console.log('Received command: ', command);

  var result = shell.exec(command);
  reply(result);
};

server.route({ method: 'GET', path: '/run', handler: response });

// Start the server
server.start(function() {
    console.log("Hapi server started @", server.info.uri);
});
