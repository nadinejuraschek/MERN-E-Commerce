const   express             = require('express'),
        router              = express.Router(),
        productController  = require('../controllers/product'),
        authController      = require('../controllers/auth'),
        userController      = require('../controllers/user');

router.post('/product/create/:userid', requireLogin, isAuth, isAdmin, categoryController.create);

router.param('userid', userById);

module.exports = router;