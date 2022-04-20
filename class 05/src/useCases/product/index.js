const Product = require("../../models/products").model;
const User = require("../../models/user").model;

// Devuelve todos los productos
const getAll = async () => {
    return await Product.find({}).exec();
};

// Devuelve un producto por ID
const getById = async (id) => {
    const product = await Product.findById(id).populate("categories").exec();
    // const review = { ...product.review, user: `http://localhost:8000/users/${product.review.user}` };
    // product.review = review;
    return product
};

// Logica de creacion del producto
const create = async (productData) => {
    const { name, description, price, image, categories } = productData;
    // const user = await User.findById(review.user).exec();
    // const reviewToSend = { ... review, user: user._id };
    const newProduct = new Product({
        name,
        description,
        price,
        image,
        categories,
    });
    const savedProduct = await newProduct.save();
    return savedProduct;
};

// Actualiza un producto
const update = async (id, productData) => {
    const { name, description, price, image } = productData;
    const updatedProduct = await Product.findByIdAndUpdate(id, {
        name,
        description,
        price,
        image,
        },
        { new: true }
    ).exec();
    return updatedProduct;
}

const patch = async (id, productData) => {
    return await Product.findByIdAndUpdate(
        id,
        { ...productData },
        { new: true }
    ).exec();
};

//Elimina un producto
const del = async (id) => {
    return await Product.findByIdAndDelete(id).exec();
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    patch,
    del
};

// Logica para crear varios productos
// const createMany = async (productsData) => {
//     productsData.forEach(async (productData) => {
//         const { name, description, price, image } = productData;
//     });
//   return "Productos Creados";
// };