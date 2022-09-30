exports.Product = {
    category: (parent, args, context) => {
        const categoryId = parent.categoryId;
        return context.categories.find(
            (category) => category.id === categoryId
        );
    },
    reviews: (parent, args, context) => {
        return context.reviews.filter(
            (review) => review.productId === parent.id
        );
    },
};
