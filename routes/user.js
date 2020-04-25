const   express         = require('express'),
        router          = express.Router(),
        userController  = require('../controllers/user');

router.post('/register', userController.register);

module.exports = router;