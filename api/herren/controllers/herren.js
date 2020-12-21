'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
    /**
     * Retrieve records.
     *
     * @return {Array}
     */

    async findDufte(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.herren.search(ctx.query);

        } else {
            entities = await strapi.services.herren.find(ctx.query);
           
        }

        return entities.map(entity => sanitizeEntity(entity.Dufte, { model: strapi.models.herren }));
    },

    async findRasur(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.herren.search(ctx.query);

        } else {

            entities = await strapi.services.herren.find(ctx.query);
    
        }

        return entities.map(entity => sanitizeEntity(entity.Rasur, { model: strapi.models.herren }));
    },

    async findBart(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.herren.search(ctx.query);

        } else {

            entities = await strapi.services.herren.find(ctx.query);
                console.log(entities);
        }

        return entities.map(entity => {sanitizeEntity(entity.Bart, { model: strapi.models.herren })});
    },

    async findPflege(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.herren.search(ctx.query);

        } else {

            entities = await strapi.services.herren.find(ctx.query);
        }

        return entities.map(entity => sanitizeEntity(entity.Pflege, { model: strapi.models.herren }));
    },




};




    /**
     * Retrieve records.
     *
     
     */

  