const mongoose = require('mongoose');
const shortid = require('shortid');

const Schema = mongoose.Schema;

const productSchema = new Schema ({
    _id: { type: String, required: true, default: shortid.generate },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    availableSizes: [ String],
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;