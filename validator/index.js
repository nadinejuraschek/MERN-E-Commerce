exports.userRegisterValidator = (req, res, next) => {
    req.check('name', 'Please enter a name.').notEmpty();
    req.check('email', 'Please enter a valid e-mail address.')
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        .withMessage('Please enter a valid e-mail address.')
        .isLength({
            min: 4,
            max: 32
        });
    req.check('password', 'Please enter a password.')
        .notEmpty()
        .isLength({
            min: 6
        })
        .withMessage('Password must be at least 6 characters long.')
        .matches(/\d/)
        .withMessage('Password must contain at least one number.');
    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    };
    next();
};