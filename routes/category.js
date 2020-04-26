const   express             = require('express'),
        router              = express.Router(),
        categoryController  = require('../controllers/category'),
        authController      = require('../controllers/auth'),
        userController      = require('../controllers/user');

router.post('/category/create/:userid', requireLogin, isAuth, isAdmin, categoryController.create);

router.param('userid', userById);

module.exports = router;