const   express         = require('express'),
        router          = express.Router(),
        userController  = require('../controllers/user');

router.get('/register', userController.register);

module.exports = router;