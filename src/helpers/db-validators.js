import Product from '../product/product.model.js';

export const productNameExists = async (name = '') => {
    const existingProduct = await Product.findOne({ name });

    if (existingProduct) {
        throw new Error(`The product name "${name}" already exists. Please choose another name.`);
    }
};