const translateFunc = require('./api.js');
const server = require('./server')(translateFunc);

const port = process.env.PORT || 3000;

server
  .listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Express is listening on port ${port}!`);
  });
