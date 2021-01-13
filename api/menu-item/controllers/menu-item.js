'use strict';

const { sanitizeEntity } = require('strapi-utils');


// const mergeFnc = data => {
//   return data.reduce((acc, el) => {
//     const findedIndex = acc.findIndex(e => e.CategoryName === el.CategoryName)

//     if (findedIndex === -1) {
//       const a = { ...el, SubCategoryName: [{ id: el.id, SubCategoryName: el.SubCategoryName }] }

//       acc.push(a)
//     } else {
//       const r = { id: el.id, SubCategoryName: el.SubCategoryName }
//       acc[findedIndex].SubCategoryName.push(r)
//     }

//     return acc
//   }, [])
// }
// const TransformFnc = item => {
//   return {
//     menu_item_id: item.menu_item_id,
//     category_id: item.category_id,
//     CategoryName: item.CategoryName,
//     SubCategoryName: item.SubCategoryName
//   }
// }

const e = (data1, data2) => {
  data1.forEach(cat1 => {
      cat1.categories.forEach(subCat => {
          data2.forEach(cat2 => {
              if (subCat.id === cat2.id) {
                subCat.subCategories = cat2.sub_categories
              }
          })
      })
  })
  return data1
}

module.exports = {
  // async findMenuItem(ctx) {
  //     const knex = strapi.connections.default;
  //     // const { id } = ctx.params;
  //     const item = await  knex.from('menu_items')
  //         .leftJoin('menu_items__categories', 'menu_items.id', 'menu_items__categories.menu_item_id')
  //         .leftJoin('categories', 'menu_items__categories.category_id', 'menu_items.id')
  //         .leftJoin('sub_categories', 'menu_items__categories.category_id', 'menu_items.id')



  //     // item.map()

  //     return item
  // },

  async findMenuItem(ctx) {
    let entities1;
    entities1 = await strapi.services['menu-item'].find(ctx.query);
    let res1 = entities1.map(entity => sanitizeEntity(entity, { model: strapi.models['menu-item'] }));
    let entities2;
    entities2 = await strapi.services.category.find(ctx.query);
    let res2 = entities2.map(entity => sanitizeEntity(entity, { model: strapi.models.category }));


    return e(res1, res2)
  },

};




