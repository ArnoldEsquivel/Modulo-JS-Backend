const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.json({message: "Todas las categorias"});
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    res.json({ message: "Categoria con id:" + id });
});

router.post("/", (req, res) => {
    const { name } = req.body;
    res.json({ message: "Categoria Creada"});
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    res.json({ message: `Categoria ${id} actualizada`});
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    res.json({ message: `Categoria ${id} eliminada`});
})

module.exports = router;