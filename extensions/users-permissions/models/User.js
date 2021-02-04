const uuid = require('uuid')



module.exports = {
    lifecycles: {
      beforeCreate(data) {
      data.uuid = uuid()
      },
    },
  };