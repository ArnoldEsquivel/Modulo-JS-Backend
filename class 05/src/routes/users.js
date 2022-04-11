const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.json({message: "Soy todos los usuarios"});
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    res.json({ message: "Usuario:" + id });
});

router.post("/", (req, res) => {
    const { name } = req.body;
    res.json({ message: "Usuario Creado" + name });
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    res.json({ message: `Usuario ${id} actualizado` + name });
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    res.json({ message: `Usuario ${id} eliminado`});
})

module.exports = router;