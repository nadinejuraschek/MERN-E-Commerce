const   Category        = require('../models/category'),
        errorHelper     = require('../helpers/dbErrorHandler');

exports.read = (req, res) => {
    return res.json(req.category);
};

exports.update = (req, res) => {
    const category = req.category;
    category.name = req.body.name;
    category.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHelper(err)
            })
        };
        res.json(data);
    });
};

exports.remove = (req, res) => {
    const category = req.category;
    category.name = req.body.name;
    category.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHelper(err)
            })
        };
        res.json({
            message: 'Category deleted.'
        });
    });
};

exports.list = (req, res) => {
    Category.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHelper(err)
            });
        };
        res.json(data);
    });
};