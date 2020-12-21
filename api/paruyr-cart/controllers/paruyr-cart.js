// 'use strict';




// const { sanitizeEntity } = require('strapi-utils');
// const _ = require('loadsh');


// module.exports = {
//   /**
//    * Retrieve a record.
//    *
//    * @return {Object}
//    */

//   async findOne(ctx) {
//     const  userid  = ctx.params.userid;
  

//     // strapi.services['paruyr-cart'].join('product', 'product.id')

//     // const entity = await strapi.services['paruyr-cart'].find({ users_permissions_user:userid});
//     // return sanitizeEntity(entity, { model: strapi.models['paruyr-cart'] });


//     const knex = strapi.connections.default;
// const result = await knex('products')
//   .where('id', `${userid}`)
//   // .whereNot('cities.published_at', null)
//   // .join('chefs', 'restaurants.id', 'chefs.restaurant_id')
//   // .select('restaurants.name as restaurant')
//   // .select('chef.name as chef')

// // Loadsh's groupBy method can be used to 
// // return a grouped key-value object generated from 
// // the response

// return (_.groupBy(result, 'chef'));
//   },
// };




