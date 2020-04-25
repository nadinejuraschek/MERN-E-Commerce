const   express         = require('express'),
        router          = express.Router(),
        authController  = require('../controllers/auth'),
        validator       = require('../validator');

router.post('/register', validator.userRegisterValidator, authController.register);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

module.exports = router;