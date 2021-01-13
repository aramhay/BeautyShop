'use strict';


module.exports = {
    /**
     * Retrieve a record.
     *
     * @return {Object}
     */

    async findSubCategoryProducts(ctx) {
        const knex = strapi.connections.default;
        const { id } = ctx.params;
        const products = await knex('products')
            .where('sub_categories.id', `${id}`)
            .join('sub_categories', 'sub_categories.id', 'products.sub_category')
            .leftJoin('upload_file_morph', 'upload_file_morph.related_id', 'products.id')
            .leftJoin('upload_file', 'upload_file.id', 'upload_file_morph.upload_file_id')
            .select('products.id', 'products.price', 'products.clean_product',
                'products.company', 'products.energy_kapseln', 'products.kapseln',
                'products.unit', 'products.discount', 'upload_file.url as image_url');
        return products
    },

    async findCategoryProducts(ctx) {
        const knex = strapi.connections.default;
        const { id } = ctx.params;
        const products = await knex('products')
            .where('categories.id', `${id}`)
            .join('categories', 'categories.id', 'products.category')
            .leftJoin('upload_file_morph', 'upload_file_morph.related_id', 'products.id')
            .leftJoin('upload_file', 'upload_file.id', 'upload_file_morph.upload_file_id')
            .select('products.id', 'products.price', 'products.clean_product',
                    'products.company', 'products.energy_kapseln', 'products.kapseln',
                    'products.unit', 'products.discount', 'upload_file.url as image_url');
        return products
    },

};