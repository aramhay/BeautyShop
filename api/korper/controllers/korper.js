'use strict';

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
    /**
     * Retrieve records.
     *
     * @return {Array}
     */


  

    async findBodylotion(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.reinigung
                .search(ctx.query);
        } else {
            entities = await strapi.services.reinigung
                .find(ctx.query);
        }
        return entities.map(entity => sanitizeEntity(entity.Bodylotion, {
            model: strapi.models.reinigung
        }));
    },
    async findSeife(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.reinigung
                .search(ctx.query);
        } else {
            entities = await strapi.services.reinigung
                .find(ctx.query);
        }
        return entities.map(entity => sanitizeEntity(entity.Seife, {
            model: strapi.models.reinigung
        }));
    },
    async findBodyButter(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.korperpflege
                .search(ctx.query);
        } else {
            entities = await strapi.services.korperpflege
                .find(ctx.query);
        }
        return entities.map(entity => sanitizeEntity(entity.BodyButter, {
            model: strapi.models.korperpflege
        }));
    },

    async findBodyOil(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.korperpflege
                .search(ctx.query);
        } else {
            entities = await strapi.services.korperpflege
                .find(ctx.query);
        }
        return entities.map(entity => sanitizeEntity(entity.BodyOil, {
            model: strapi.models.korperpflege
        }));
    },

    async findDeodorant(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.korperpflege
                .search(ctx.query);
        } else {
            entities = await strapi.services.korperpflege
                .find(ctx.query);
        }
        return entities.map(entity => sanitizeEntity(entity.Deodorant, {
            model: strapi.models.korperpflege
        }));
    },

    async findDuschenBaden(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.korperpflege
                .search(ctx.query);
        } else {
            entities = await strapi.services.korperpflege
                .find(ctx.query);
        }
        return entities.map(entity => sanitizeEntity(entity.DuschenBaden, {
            model: strapi.models.korperpflege
        }));
    },

    async findPeeling(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.korperpflege
                .search(ctx.query);
        } else {
            entities = await strapi.services.korperpflege
                .find(ctx.query);
        }
        return entities.map(entity => sanitizeEntity(entity.Peeling, {
            model: strapi.models.korperpflege
        }));
    },

    async findPflegen(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.korperpflege
                .search(ctx.query);
        } else {
            entities = await strapi.services.korperpflege
                .find(ctx.query);
        }
        return entities.map(entity => sanitizeEntity(entity.Pflegen, {
            model: strapi.models.korperpflege
        }));
    },

    async findFubpflege(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services['hande-fusse']
                .search(ctx.query);
        } else {
            entities = await strapi.services['hande-fusse']
                .find(ctx.query);
        }
        return entities.map(entity => sanitizeEntity(entity.Fubpflege, {
            model: strapi.models['hande-fusse']
        }));
    },
    async findHandpflege(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services['hande-fusse']
                .search(ctx.query);
        } else {
            entities = await strapi.services['hande-fusse']
                .find(ctx.query);
        }
        return entities.map(entity => sanitizeEntity(entity.Handpflege, {
            model: strapi.models['hande-fusse']
        }));
    },
    async findSonnenschutz(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.korper
                .search(ctx.query);
        } else {
            entities = await strapi.services.korper
                .find(ctx.query);
        }
        return entities.map(entity => sanitizeEntity(entity.Sonnenschutz, {
            model: strapi.models.korper
        }));
    },

    




    


















   
};








