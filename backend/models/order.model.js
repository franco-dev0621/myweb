const mongoose = require('mongoose');
const shortid = require('shortid');

const Schema = mongoose.Schema;

const orderSchema = new Schema ({
    _id: { type: String, default: shortid.generate},
    email: { type: String, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    total: { type: Number, required: true },
    cartItems: [
        {
            _id: { type: String, required: true },
            title: { type: String, required: true },
            price: { type: Number, required: true },
            count: { type: Number, required: true },
        },        
    ],
}, {
        timestamps: true,
    }
);


const Order = mongoose.model('Order', orderSchema);

module.exports = Order;