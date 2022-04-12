const express = require('express');
const product = require("../useCases/product");
const router = express.Router();

router.get("/", async (req, res) => {
    const products = await product.getAll();
    res.json({
        success: true,
        payload: products,
    });
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    res.json({ message: "Un producto con id:" + id });
});

router.post("/", async (req, res) => {
    const { name, description, price, image } = req.body;
    const productCreated = product.create({
        name,
        description, 
        price, 
        image,
    });
    res.json({ 
        success: true, 
        message: "Producto Creado", 
        payload: productCreated,
    });
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    res.json({ message: `Producto ${id} actualizado`, payload: { name, price }});
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    res.json({ message: `Producto ${id} eliminado`});
})

module.exports = router;