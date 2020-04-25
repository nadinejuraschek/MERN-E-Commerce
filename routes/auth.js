const   express         = require('express'),
        router          = express.Router(),
        userController  = require('../controllers/auth'),
        validator       = require('../validator');

router.post('/register', validator.userRegisterValidator, userController.register);
router.post('/login', userController.login);
router.get('/logout', userController.logout);

module.exports = router;