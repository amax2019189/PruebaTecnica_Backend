import mongoose, { mongo } from "mongoose";

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }, 
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

export default mongoose.model('Product', ProductSchema);