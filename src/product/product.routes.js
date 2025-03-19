import { Router } from 'express';
import { check } from 'express-validator';
import { createProduct, getProduct, deleteProduct } from "./producto.controller.js";

const router = Router();

router.post(
    "/create",
    [
        check('name', 'Name is required').not().isEmpty(),
        check('description', 'Description is required').not().isEmpty(),
        check('price', 'Price is required').not().isEmpty(),
        check('category', 'Category is required').not().isEmpty()
    ],
    createProduct
);

router.get(
    "/get",
    [

    ],
    getProduct
);

router.delete(
    "/delete/:id",
    [
        check('id', 'ID is required').not().isEmpty()
    ],
    deleteProduct
);

export default router;