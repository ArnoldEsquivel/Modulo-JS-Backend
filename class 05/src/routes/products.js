const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.json({message: "Soy todos los productos"});
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    res.json({ message: "Un producto con id:" + id });
});

router.post("/", (req, res) => {
    const { name, price } = req.body;
    res.json({ message: "Producto Creado", payload: { name, price }});
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