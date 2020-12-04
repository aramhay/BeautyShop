'use strict';

module.exports = {
  // GET /hello
  index: async ctx => {
    ctx.send('Hello World!');
  },
};