'use strict';

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
    /**
     * Retrieve records.
     *
     * @return {Array}
     */

    async findDamen(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.parfums.search(ctx.query);

        } else {  
            entities = await strapi.services.parfums.find(ctx.query);
           
        }

        return entities.map(entity => sanitizeEntity(entity.Damen, { model: strapi.models.parfums }));
    },

    async findHerren(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.parfums.search(ctx.query);

        } else {

            entities = await strapi.services.parfums.find(ctx.query);
    
        }

        return entities.map(entity => sanitizeEntity(entity.Herren, { model: strapi.models.parfums }));
    },
    async findUnisex(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.parfums.search(ctx.query);

        } else {

            entities = await strapi.services.parfums.find(ctx.query);
    
        }

        return entities.map(entity => sanitizeEntity(entity.Unisex, { model: strapi.models.parfums }));
    },

   
   


};





  