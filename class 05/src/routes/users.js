const express = require('express');
const user = require('../useCases/user');
const router = express.Router();

router.get("/", (req, res) => {
    res.json({message: "Soy todos los usuarios"});
});

router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const retrievedUser = await user.getById(id);
        res.json({
            success: true,
            payload: retrievedUser,
        });
    } catch (error) {
        next(error);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const userCreated = await user.create(firstName, lastName, email, password);
        res.json({
            success: true,
            message: "Usuario Creado",
            payload: userCreated,
        });
    } catch (error) {
        next(error);
    };
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