const   express         = require('express'),
        router          = express.Router(),
        authController  = require('../controllers/auth'),
        userController  = require('../controllers/user');

router.get('/secret/:userid', authController.requireLogin, authController.isAuth, authController.isAdmin, (req, res) => {
    res.json({
        user: req.profile
    });
});

router.param('userid', userController.userById);

module.exports = router;