const   express         = require('express'),
        router          = express.Router(),
        userController  = require('../controllers/user'),
        validator       = require('../validator');

router.post('/register', validator.userRegisterValidator, userController.register);

module.exports = router;