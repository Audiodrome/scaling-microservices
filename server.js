'use strict';

const Hapi = require('hapi');

const server = Hapi.server({
  host: 'localhost',
  port: 8000
});

server.route({
  method: 'GET',
  path: '/api/timestamp/{date}',
  handler: function (request, h) {
    const unixTimestamp = { 'unix': Date.parse(request.params.date) };
    if (!unixTimestamp.unix) {
      unixTimestamp['natural'] = null;
    } else {
      unixTimestamp['natural'] = request.params.date;
    }
    return unixTimestamp;
  }
});

async function start() {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  console.log('Server running at:', server.info.uri);
};

start();
