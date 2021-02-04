'use strict';

const uuid = require('uuid')

module.exports = {
    lifecycles: {
        beforeCreate: async (data) => {
           data.uuid = uuid()
          }
      },
};
