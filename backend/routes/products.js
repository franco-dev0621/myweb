const router = require('express').Router();
let Product = require('../models/product.model');

router.route('/').get((req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const _id = req.body._id;
    const title = req.body.title;
    const description = req.body.description;
    const image = req.body.image;
    const price = req.body.price;
    const availableSizes = req.body.availableSizes;

    const newProduct = new Product({
        _id,
        title,
        description,
        image,
        price,
        availableSizes,
    });

    newProduct.save()
    .then(() => res.json('Product added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Product.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/:id').delete((req, res) => {
    Product.findByIdAndDelete(req.params.id)
    .then(exercise => res.json('Product deleted.'))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/update/:id').put((req, res) => {
    Product.findById(req.params.id)
    .then(product => {
        const _id = req.body._id;
        product.req.body.title;
        product.req.body.description;
        product.req.body.image;
        product.req.body.price;
        product.req.body.availableSizes;

        exercise.save()
            .then(() => res.json('Product updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;