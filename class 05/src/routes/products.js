const express = require("express");
const { authHandler } = require("../middlewares/authHandlers");
const adminHandler = require("../middlewares/permissionHandler");
const product = require("../useCases/product");
const router = express.Router();


router.get("/", async (req, res, next) => {
    try {
        const products = await product.getAll();
        res.json({
            success: true,
            payload: products,
        });
    } catch (error) {
        next(error);
    }
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const payload = await product.getById(id);
    res.json({ success: true, payload });
});

// Se coloca antes de los metodos de edidicon para que solo un usuario
// logueado pueda editar, todas las rutas de abajo estaran protegidas
// router.use(authHandler)

// Aqui lo colocamos como segundo parameto para proteger solo esta ruta
router.post("/", authHandler, async (req, res, next) => {
    try {
        const { name, description, price, image, categories } = req.body;
        const productCreated = product.create({
            name,
            description, 
            price, 
            image,
            categories,
        });
        res.json({ 
            success: true, 
            message: "Producto Creado con Exito", 
            payload: productCreated,
        });
    } catch (error) {
        next(error);
    }
});

router.put("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, description, price, image } = req.body;
        const productUpdated = await product.update(id, {
            name,
            description,
            price,
            image,
        });
        res.json({
            success: true,
            message: `Producto ${id} actualizado`,
            payload: productUpdated,
        });
    } catch (error) {
        next(error);
    }
});

router.patch("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const productUpdated = await product.patch(id, { ...req.body });
        res.json ({
            success: true,
            message: `Producto ${id} actualizado`,
            payload: productUpdated,
        });
    } catch (error) {
        next(error);    
    }
});

router.delete("/:id", adminHandler, async (req, res, next) => {
    try {
        const { id } = req.params;
        const productDeleted = await product.del(id);
        res.json({
            success: true,
            message: `Producto ${id} eliminado`,
            payload: productDeleted,
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;