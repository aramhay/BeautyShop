'use strict';

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
    /**
     * Retrieve records.
     *
     * @return {Array}
     */

    async findTagespflege(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.gesicht.search(ctx.query);
        } else {
            entities = await strapi.services.gesicht.find(ctx.query);
        }
        return entities.map(entity => sanitizeEntity(entity.Tagespflege, { model: strapi.models.gesicht }));
    },


    async findNachtpflege(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.gesicht.search(ctx.query);
        } else {
            entities = await strapi.services.gesicht.find(ctx.query);
        }
        return entities.map(entity => sanitizeEntity(entity.Nachtpflege, { model: strapi.models.gesicht }));
    },


    async findGesichtswasser(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.gesichtsreinigung
                .search(ctx.query);
        } else {
            entities = await strapi.services.gesichtsreinigung
                .find(ctx.query);
        }
        return entities.map(entity => sanitizeEntity(entity.Gesichtswasser, {
            model: strapi.models.gesichtsreinigung
        }));
    },

    async findPeeling(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.gesichtsreinigung
                .search(ctx.query);
        } else {
            entities = await strapi.services.gesichtsreinigung
                .find(ctx.query);
        }
        return entities.map(entity => sanitizeEntity(entity.Peeling, {
            model: strapi.models.gesichtsreinigung
        }));
    },

    async findGesichtsol(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.gesichtspflege
                .search(ctx.query);
        } else {
            entities = await strapi.services.gesichtspflege
                .find(ctx.query);
        }
        return entities.map(entity => sanitizeEntity(entity.Gesichtsol, {
            model: strapi.models.gesichtspflege
        }));
    },


    async findGesichtsserum(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.gesichtspflege
                .search(ctx.query);
        } else {
            entities = await strapi.services.gesichtspflege
                .find(ctx.query);
        }
        return entities.map(entity => sanitizeEntity(entity.Gesichtsserum, {
            model: strapi.models.gesichtspflege
        }));
    },

    async findGesichtsspray(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.gesichtspflege
                .search(ctx.query);
        } else {
            entities = await strapi.services.gesichtspflege
                .find(ctx.query);
        }
        return entities.map(entity => sanitizeEntity(entity.Gesichtsspray, {
            model: strapi.models.gesichtspflege
        }));
    },

    async findMasken(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.gesichtspflege
                .search(ctx.query);
        } else {
            entities = await strapi.services.gesichtspflege
                .find(ctx.query);
        }
        return entities.map(entity => sanitizeEntity(entity.Masken, {
            model: strapi.models.gesichtspflege
        }));
    },
    async findAugenpflege(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.gesichtspflege
                .search(ctx.query);
        } else {
            entities = await strapi.services.gesichtspflege
                .find(ctx.query);
        }

        return entities.map(entity => sanitizeEntity(entity.Augenpflege, {
            model: strapi.models.gesichtspflege
        }));
    },
    async findHalspflege(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.gesichtspflege
                .search(ctx.query);
        } else {
            entities = await strapi.services.gesichtspflege
                .find(ctx.query);
        }
        return entities.map(entity => sanitizeEntity(entity.Halspflege, {
            model: strapi.models.gesichtspflege
        }));
    },

    async findLippenpflege(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.gesichtspflege
                .search(ctx.query);
        } else {
            entities = await strapi.services.gesichtspflege
                .find(ctx.query);
        }
        return entities.map(entity => sanitizeEntity(entity.Lippenpflege, {
            model: strapi.models.gesichtspflege
        }));
    },


    async findZahnpflege(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.gesichtspflege
                .search(ctx.query);
        } else {
            entities = await strapi.services.gesichtspflege
                .find(ctx.query);
        }
        return entities.map(entity => sanitizeEntity(entity.Zahnpflege, {
            model: strapi.models.gesichtspflege
        }));
    },

    async findWirkstoffe(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.gesicht.search(ctx.query);
        } else {
            entities = await strapi.services.gesicht.find(ctx.query);
        }
        return entities.map(entity => sanitizeEntity(entity.Wirkstoffe, { model: strapi.models.gesicht }));
    },
    async findEssenzen_Booster(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.gesicht.search(ctx.query);
        } else {
            entities = await strapi.services.gesicht.find(ctx.query);
        }
        return entities.map(entity => sanitizeEntity(entity.Essenzen_Booster, { model: strapi.models.gesicht }));
    },

    async findSonnenschutz(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.gesicht.search(ctx.query);
        } else {
            entities = await strapi.services.gesicht.find(ctx.query);
        }
        return entities.map(entity => sanitizeEntity(entity.Sonnenschutz, { model: strapi.models.gesicht }));
    },


    async findHautprobleme(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.hautbedurfnis
                .search(ctx.query);
        } else {
            entities = await strapi.services.hautbedurfnis
                .find(ctx.query);
        }
        return entities.map(entity => sanitizeEntity(entity.Hautprobleme, {
            model: strapi.models.hautbedurfnis
        }));
    },
};








