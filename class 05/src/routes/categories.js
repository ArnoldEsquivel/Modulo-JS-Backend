const express = require('express');
const router = express.Router();
const category = require('../useCases/category');

router.get("/", async (req, res, next) => {
    try {
        const categories = await category.getAll();
        res.json({
            success: true,
            payload: categories,
        });
    } catch (error) {
        next(error);
    };
});

router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const retrievedCategory = await category.getById(id);
        res.json({
            success: true,
            payload: retrievedCategory,
        });
    } catch (error) {
        next(error);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const { name } = req.body;
        const createdCategory = await category.create(name);
        res.json({
            success: true,
            message: 'Categoria Creada',
            payload: createdCategory,
        });
    } catch (error) {
        next(error);
    }
});

router.put("/:id", (req, res, next) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const updatedCategory = category.update(id, name);
        res.json({
            success: true,
            message: 'Categoria actualizada',
            payload: updatedCategory,
        });
    } catch (error) {
        next(error);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedCategory = await category.del(id);
        res.json({
            success: true,
            message: 'Categoria eliminada',
            payload: deletedCategory,
        });
    } catch (error) {
        next(error);
    }
})

module.exports = router;