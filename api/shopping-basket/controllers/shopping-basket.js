'use strict';


const _ = require('loadsh');

module.exports = {
    /**
     * Retrieve a record.
     *
     * @return {Object}
     */

    async findOne(ctx) {
         console.log(  strapi.services);

        const userid = ctx.params.userid;
        const knex = strapi.connections.default;
        const result = await knex('shopping_baskets')
            .where('shopping_baskets.users_permissions_user', `${userid}`)
            .join('products', 'products.id', 'shopping_baskets.product')
            .leftJoin('upload_file_morph', 'upload_file_morph.related_id', 'shopping_baskets.product')
            .leftJoin('upload_file', 'upload_file.id', 'upload_file_morph.upload_file_id')
            .select('shopping_baskets.id', "shopping_baskets.quantity", 'products.company', 'products.id', 'products.price', 'products.energy_kapseln', 'products.discount', 'upload_file.url as image_url',);

        const gift_wrap = await knex('shopping_baskets')
            .where('shopping_baskets.users_permissions_user', `${userid}`)
            .join('gift_wraps', 'gift_wraps.id', 'shopping_baskets.product')
            .select('gift_wraps.id');

        let cost = 0
        const shipping = await strapi.services.discount.find()
        result.map((e) => { cost += e.price * e.quantity - (e.price * e.quantity * e.discount / 100) })
        if (cost < shipping.minprice) {
            cost += shipping.discount
        }
        if (result.length === 0) cost = 0;
        if (gift_wrap.length !== 0) {
            cost+=5; 
            let gift_wrap_data = await strapi.services['gift-wrap'].find({ id: gift_wrap[0].id })
            result.push({
                "id": gift_wrap_data[0].id,
                "price": gift_wrap_data[0].price,
                "name": gift_wrap_data[0].Name,
                "text": gift_wrap_data[0].Text,
                "images": gift_wrap_data[0].images[0].url
            })
        } result.push({ cost })
        return (result)
    },
    async create(ctx) {
        let entity;
        let id = ctx.request.body.product
        let exist = await strapi.services.products.find({ id })
        if (exist.length === 0) return ({ success: false, message: "product is not exist" })
        else {
            let availableCount = await strapi.services.products.find({ id })
            if ((availableCount[0].for_sale_count) < ctx.request.body.quantity)
                return ({ success: false, message: `product quantity is less than ${ctx.request.body.quantity}` })
        }
        let entity1 = await strapi.services['shopping-basket'].find({ users_permissions_user: ctx.request.body.users_permissions_user, product: ctx.request.body.product });
        if (entity1.length === 1) {
            entity = await strapi.services['shopping-basket'].update({ id: entity1[0].id }, { ...entity1[0], ...ctx.request.body });
            return { success: true };
        } else {


            entity = await strapi.services['shopping-basket'].create(ctx.request.body);
            return { success: true };
        }

    },

    async create_gift_wrap(ctx) {
        ctx.request.body.product = 1;
        await strapi.services['shopping-basket'].create(ctx.request.body);
        return { success: true };
    },

    async delete_gift_wrap(ctx) {
        let { userid } = ctx.params
        const knex = strapi.connections.default;
        const gift_wrap = await knex('shopping_baskets')
            .where('shopping_baskets.users_permissions_user', `${userid}`)
            .join('gift_wraps', 'gift_wraps.id', 'shopping_baskets.product')
            .select('shopping_baskets.id');
        await strapi.services['shopping-basket'].delete({ id: gift_wrap[0].id });
        return ({ success: true, message: 'success' })
    },


    async delete(ctx) {
        let { userid, productid } = ctx.params
        await strapi.services['shopping-basket'].delete({ users_permissions_user: userid, product: productid });
        return ({ success: true, message: "deleted" })
    }

};






