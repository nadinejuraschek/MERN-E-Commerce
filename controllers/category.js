const   Category        = require('../models/category'),
        errorHelper     = require('../helpers/dbErrorHandler');

exports.create = (req, res) => {
    const category = new Category(req.body);
    category.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHelper.errorHandler(err)
            });
        };
        res.json({ data });
    });
};