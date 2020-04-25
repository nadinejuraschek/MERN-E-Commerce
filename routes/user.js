const   express         = require('express'),
        router          = express.Router(),
        userController  = require('../controllers/user');

router.param('userid', userController.userById);

module.exports = router;