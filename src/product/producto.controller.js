import Product from './product.model.js';

export const createProduct = async (req, res) => {
    try {
        const { name, description, price, category } = req.body;

        const product = new Product({
            name,
            description,
            price,
            category
        });

        await product.save();
        
        return res.status(200).send("Product created successfully");

    } catch (e) {
        console.log(e);
        return res.status(500).send("Error creating product");
    }
}

export const getProduct = async (req, res) => {
    try {
        const product = await Product.find();

        if (!product) {
            return res.status(400).send("Product not found");
        }

        return res.status(200).send(product);
        
    } catch (e) {
        console.log(e);
        return res.status(500).send("Error getting product");
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const existsProduct = await Product.findById(id);

        if (!existsProduct) {
            return res.status(404).send("Product with ID not found.");
        }

        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).send("The product does not exist.");
        }

        return res.status(200).send("Product deleted successfully.");

    } catch (e) {
        console.log(e);
        return res.status(500).send("Error deleting product");
    }
}