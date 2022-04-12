const Product = require("../../models/products").model;

const getAll = async () => {
    // Devuelve todos los productos
    const allProducts = await Product.find({}).exec();
    return allProducts;
};

const getById = async (id) => {
    // Devuelve un producto por ID
};

const create = async (productData) => {
    // Aqui deberia ir la logica de creacion del producto
    const { name, description, price, image } = productData;
    const newProduct = new Product({
        name,
        description,
        price,
        image,
    });
    const savedProduct = await newProduct.save();

    return savedProduct;
};

const update = async (id, productData) => {
    // actualiza un producto
}

const del = async (id) => {
    //Elimina un producto
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    del
};


// Logica para crear varios productos
// const createMany = async (productsData) => {
//     productsData.forEach(async (productData) => {
//         const { name, proce, description, image } = productData;
//     });
//   return "Productos Creados";
// };