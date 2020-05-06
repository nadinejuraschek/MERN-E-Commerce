const   express             = require('express'),
        router              = express.Router(),
        productController   = require('../controllers/product'),
        authController      = require('../controllers/auth'),
        userController      = require('../controllers/user');

router.get('/product/productid');

router.post('/product/create/:userid', authController.requireLogin, authController.isAuth, authController.isAdmin, productController.create);

router.param('userid', userController.userById);
router.param('productid', productController.productById);

module.exports = router;