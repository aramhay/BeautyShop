'use strict';

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
    /**
     * Retrieve records.
     *
     * @return {Array}
     */




    async findShampoo(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services['shampoo-conditioner']
                .search(ctx.query);
        } else {
            console.log(strapi.services);
            entities = await strapi.services['shampoo-conditioner']
                .find(ctx.query);
        }
        return entities.map(entity => sanitizeEntity(entity.Shampoo, {
            model: strapi.models['shampoo-conditioner']
        }));
    },

    async findConditioner(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services['shampoo-conditioner']
                .search(ctx.query);
        } else {
            console.log(strapi.services);
            entities = await strapi.services['shampoo-conditioner']
                .find(ctx.query);
        }
        return entities.map(entity => sanitizeEntity(entity.Conditioner, {
            model: strapi.models['shampoo-conditioner']
        }));
    },
    async findHaarmaske(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.intensivpflege
                .search(ctx.query);
        } else {
            console.log(strapi.services);
            entities = await strapi.services.intensivpflege
                .find(ctx.query);
        }
        return entities.map(entity => sanitizeEntity(entity.Haarmaske, {
            model: strapi.models.intensivpflege
        }));
    }, async findHaarol(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.intensivpflege
                .search(ctx.query);
        } else {
            console.log(strapi.services);
            entities = await strapi.services.intensivpflege
                .find(ctx.query);
        }
        return entities.map(entity => sanitizeEntity(entity.Haarol, {
            model: strapi.models.intensivpflege
        }));
    },
    async findHaarspray(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.styling
                .search(ctx.query);
        } else {
            console.log(strapi.services);
            entities = await strapi.services.styling
                .find(ctx.query);
        }
        return entities.map(entity => sanitizeEntity(entity.Haarspray, {
            model: strapi.models.styling
        }));
    },
    async findPomade(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.styling
                .search(ctx.query);
        } else {
            console.log(strapi.services);
            entities = await strapi.services.styling
                .find(ctx.query);
        }
        return entities.map(entity => sanitizeEntity(entity.Pomade, {
            model: strapi.models.styling
        }));
    },
    async findSaltspray(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.styling
                .search(ctx.query);
        } else {
            console.log(strapi.services);
            entities = await strapi.services.styling
                .find(ctx.query);
        }
        return entities.map(entity => sanitizeEntity(entity.Saltspray, {
            model: strapi.models.styling
        }));
    },
    

};








