'use strict';

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
    /**
     * Retrieve records.
     *
     * @return {Array}
     */

    async findOrganic(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services['clean-beauty'].search(ctx.query);
        } else {
            entities = await strapi.services['clean-beauty'].find(ctx.query);
        }
        return entities.map(entity => sanitizeEntity(entity.Organic, { model: strapi.models['clean-beauty'] }));
    },
    async findVegan(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services['clean-beauty'].search(ctx.query);
        } else {
            entities = await strapi.services['clean-beauty'].find(ctx.query);
        }
        return entities.map(entity => sanitizeEntity(entity.Vegan, { model: strapi.models['clean-beauty'] }));
    }





};





