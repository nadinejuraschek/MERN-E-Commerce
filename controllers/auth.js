const   jwt             = require('jsonwebtoken'),
        expressJwt      = require('express-jwt'),
        User            = require('../models/user'),
        errorHelper     = require('../helpers/user')
        authController  = require('./auth');

exports.register = (req, res) => {
    const user = new User(req.body);
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                err: errorHelper.errorHandler(err)
            });
        };
        user.salt = undefined;
        user.hashed_password = undefined;
        res.json({ user });
    });
};

exports.login = (req, res) => {
    const { email, password} = req.body;
    User.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                err: 'User with this e-mail does not exist. Please register.'
            });
        };
        if (!user.authController.authenticate(password)) {
            return res.status(401).json({ 
                error: 'E-Mail and Password do not match.'
            });
        };
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        res.cookie('t', token, { expire: new Date() + 9999 });
        const { _id, name, email, role } = user;
        return res.json({ token, user: { _id, name, email, role } });
    });
};

exports.logout = (req, res) => {
    res.clearCookie('t');
    res.json({ 
        message: 'Successfully logged out.'
    });
};

exports.requireLogin = expressJwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'auth'
});

exports.isAuth = (req, res, next) => {
    let user = req.profile && req.auth && req.profile._id == req.auth._id;
    if (!user) {
        res.status(403).json({
            error: 'Access denied.'
        });
    };
    next();
};

exports.isAdmin = (req, res, next) => {
    if (req.profile.role === 0) {
        return res.status(403).json({
            error: 'Not an admin! Access denied.'
        });
    };
    next();
}