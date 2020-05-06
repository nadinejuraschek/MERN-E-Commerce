const   express             = require('express'),
        router              = express.Router(),
        categoryController  = require('../controllers/category'),
        authController      = require('../controllers/auth'),
        userController      = require('../controllers/user');

router.post('/category/create/:userid', authController.requireLogin, authController.isAuth, authController.isAdmin, categoryController.create);

// router.param('userid', userById);

module.exports = router;