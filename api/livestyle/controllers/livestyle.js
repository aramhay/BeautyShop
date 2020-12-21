'use strict';

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
    /**
     * Retrieve records.
     *
     * @return {Array}
     */

    async findTrinkflaschen(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.livestyle.search(ctx.query);

        } else {  console.log(strapi.services)
            entities = await strapi.services.livestyle.find(ctx.query);
           
        }

        return entities.map(entity => sanitizeEntity(entity.Trinkflaschen, { model: strapi.models.livestyle }));
    },

    async findMakeup_Etuis(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.livestyle.search(ctx.query);

        } else {

            entities = await strapi.services.livestyle.find(ctx.query);
    
        }

        return entities.map(entity => sanitizeEntity(entity.Makeup_Etuis, { model: strapi.models.livestyle }));
    },
    async findKorperbursten(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.livestyle.search(ctx.query);

        } else {

            entities = await strapi.services.livestyle.find(ctx.query);
    
        }

        return entities.map(entity => sanitizeEntity(entity.Korperbursten, { model: strapi.models.livestyle }));
    },
    async findKerzen(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.livestyle.search(ctx.query);

        } else {

            entities = await strapi.services.livestyle.find(ctx.query);
    
        }

        return entities.map(entity => sanitizeEntity(entity.Kerzen, { model: strapi.models.livestyle }));
    },
    async findFur_Mutter(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.livestyle.search(ctx.query);

        } else {

            entities = await strapi.services.livestyle.find(ctx.query);
    
        }

        return entities.map(entity => sanitizeEntity(entity.Fur_Mutter, { model: strapi.models.livestyle }));
    },

    async findNahrungserganzungsmittel(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.livestyle.search(ctx.query);

        } else {

            entities = await strapi.services.livestyle.find(ctx.query);
    
        }

        return entities.map(entity => sanitizeEntity(entity.Nahrungserganzungsmittel, { model: strapi.models.livestyle }));
    },

   
   


};








  