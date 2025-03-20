import { Router } from 'express';
import { check } from 'express-validator';
import { createProduct, getProduct, deleteProduct } from "./producto.controller.js";
import { validateFields } from "../middleware/validate-fields.js";
import { productNameExists } from "../helpers/db-validators.js";

const router = Router();

router.post(
    "/create",
    [
        check('name', 'Name is required').not().isEmpty(),
        check('name').custom(productNameExists),
        check('description', 'Description is required').not().isEmpty(),
        check('price', 'Price is required').not().isEmpty(),
        check('category', 'Category is required').not().isEmpty(),
        validateFields
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