'use strict';



const { sanitizeEntity } = require('strapi-utils');
const products = require('../../products/controllers/products');

module.exports = {
    /**
      Retrieve records.
     
     * @return {Array}
     */

    async find(ctx) {
        const knex = strapi.connections.default;
        let entities;
        let entity
        let result = [];
        if (ctx.query._q) {
            entities = await strapi.services['magazin-presentation'].search(ctx.query);
        } else {
            entities = await strapi.services['magazin-presentation'].find(ctx.query);
        }
        entity = entities.map(entity => sanitizeEntity(entity, { model: strapi.models['magazin-presentation'] }));
        entity.map((el, index) => {
            result.push({
                id: el.id, text_1: el.text_1, text_2: el.text_2, position: el.position,
                image_url_1: el.images_1?.url ? el.images_1.url : null,
                image_url_2: el.images_2?.url ? el.images_2.url : null,
                products: el.products.map((elem) =>
                    ({ id: elem.id, name: elem.name, brand: elem.brand, url: elem.images[0]?.url ? elem.images[0].url : null  })
                )
            })
        })
        return result
    },
};