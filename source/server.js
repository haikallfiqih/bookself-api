const hapi = require('@hapi/hapi');
const routes = require('./route');

const init = async () => {
  const server = hapi.Server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log('Server berjalan pada %s', server.info.uri);
};

init();
