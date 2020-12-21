'use strict';

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');



module.exports = {
      /**
       * Update a record.
       *
       * @return {Object}
       */
      async updatee(ctx) {
            const { id } = ctx.params;
            let entity;
            if (ctx.is('multipart')) {
                  const { data, files } = parseMultipartData(ctx);
                  console.log(strapi.services['shoping-cart'], 'llllllllllllll')
                  entity = await strapi.services['shoping-cart'].update({ id }, data, {
                        files,
                  });
            } else {
                  const entity1 = await strapi.services['shoping-cart'].findOne({ id });
                  // sanitizeEntity(entity, { model: strapi.models.restaurant });
                  console.log(id)
                  //  let prod={product_id:10}
                  // const product = await strapi.services['shoping-cart'].findOne({ prod });
                  // console.log(product)
                  ctx.request.body.products.map(e => {
                        entity1.products.push(e)
                  })
                  entity = await strapi.services['shoping-cart'].update({ id }, { products: entity1.products });
            }
            return sanitizeEntity(entity, { model: strapi.models['shoping-cart'] });
      },
};