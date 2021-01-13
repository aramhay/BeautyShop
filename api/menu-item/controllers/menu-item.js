'use strict';

const mergeFnc = data => {
  return data.reduce((acc, el) => {
    const findedIndex = acc.findIndex(e => e.CategoryName === el.CategoryName)

    if (findedIndex === -1) {
      const a = { ...el, SubCategoryName: [{ id: el.id, SubCategoryName: el.SubCategoryName }] }

      acc.push(a)
    } else {
      const r = { id: el.id, SubCategoryName: el.SubCategoryName }
      acc[findedIndex].SubCategoryName.push(r)
    }

    return acc
  }, [])
}
const TransformFnc = item => {
  return {
    menu_item_id: item.menu_item_id,
    category_id: item.category_id,
    CategoryName: item.CategoryName,
    SubCategoryName: item.SubCategoryName
  }
}

module.exports = {
    async findMenuItem(ctx) {
        const knex = strapi.connections.default;
        // const { id } = ctx.params;
        const item = await  knex.from('menu_items')
            .leftJoin('menu_items__categories', 'menu_items.id', 'menu_items__categories.menu_item_id')
            .leftJoin('categories', 'menu_items__categories.category_id', 'menu_items.id')
            

        // item.map()
            
        return item
    },
};




 