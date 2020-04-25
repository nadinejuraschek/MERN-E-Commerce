const   User            = require('../models/user'),
        userController  = require('../helpers/dbErrorHandler');

exports.register = (req, res) => {
    const user = new User(req.body);
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                err: userController.errorHandler(err);
            });
        };
        user.salt = undefined;
        user.hashed_password = undefined;
        res.json({ user });
    });
};