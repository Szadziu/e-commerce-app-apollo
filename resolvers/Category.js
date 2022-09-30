exports.Category = {
    products: (parent, { filter }, context) => {
        const categoryId = parent.id;

        const categoryProducts = context.products.filter(
            (product) => product.categoryId === categoryId
        );
        let filteredCategoryProducts = categoryProducts;

        if (filter) {
            if (filter.onSale === true) {
                filteredCategoryProducts = filteredCategoryProducts.filter(
                    (product) => product.onSale
                );
            }
        }
        return filteredCategoryProducts;
    },
};
