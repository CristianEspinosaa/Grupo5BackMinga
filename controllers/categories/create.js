import Category from '../../models/Category.js';

let create = async (req, res, next) => {
    try {
        let category = req.body;
        let newCategory = await Category.create(category);
        return res.status(201).json({
            success: true,
            message: "Category created successfully.",
            response: newCategory
        });
    } catch (error) {
        next(error);
    }
};

let createMany = async (req, res, next) => {
    try {
        let categories = req.body;
        let allCategories = await Category.insertMany(categories);

        return res.status(201).json({
            success: true,
            message: "Categories created successfully.",
            response: allCategories,
        });
    } catch (error) {
        next(error);
    }
};

export { create, createMany };