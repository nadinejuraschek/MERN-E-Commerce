const   formidable  = require('formidable'),
        lodash      = require('lodash'),
        fs          = require('fs'),
        Product     = require('../models/product'),
        errorHelper = require('../helpers/dbErrorHandler');

exports.create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: 'Image could not be uploaded.'
            });
        };

        let product = new Product(fields);

        if (files.photo) {
            product.photo.data = fs.readFileSync(files.photo.path);
            product.photo.contentType = files.photo.type;
        };
        product.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHelper.errorHandler(err);
                });
            };
            res.json(result);
        });
    });
};