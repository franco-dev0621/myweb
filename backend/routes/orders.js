const router = require('express').Router();
let Order = require('../models/order.model');

router.route('/').get((req, res) => {
    Order.find()
        .then(order => res.json(orders))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const _id = req.body._id;
    const email = req.body.email;
    const name = req.body.name;
    const address = req.body.address;
    const total = Number(req.body.total);
    const cartItems = req.body.cartItems;

    const newOrder = new Order({
        _id,
        email,
        name,
        address,
        total,
        cartItems,
    });

    newOrder.save()
    .then(() => res.json('Order added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Order.findById(req.params.id)
    .then(order => res.json(order))
    .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;