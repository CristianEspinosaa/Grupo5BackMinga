import { Router } from "express";
import { allCategories, categoryById } from "../controllers/categories/read.js";
import { create, createMany } from "../controllers/categories/create.js";
import { updateCategory } from "../controllers/categories/update.js";
import { deleteCategory } from "../controllers/categories/delete.js";

const router = Router();

router.get('/all', allCategories);
router.get('/id/:id', categoryById);

router.post('/create', create);
router.post('/createMany', createMany);

router.put('/update/:id', updateCategory);

router.delete('/delete/:id', deleteCategory);

export default router;