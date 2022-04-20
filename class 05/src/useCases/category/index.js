const Category = require('../../models/category').model;

const getAll = async () => {
    return await Category.find({}).exec();
};

const getById = async (id) => {
    return await Category.findById(id).exec();
}

const create = async (name) => {
    const category = new Category({ name });
    return await category.save();
};

const update = async (id, name) => {
    const category = new Category.findById(id).exec();
    category.name = name;
    return await category.save();
};

const del = async (id) => {
    return await Category.findByIdAndDelete(id).exec();
}

module.exports = { 
    create,
    getAll,
    getById,
    update,
    del,
};