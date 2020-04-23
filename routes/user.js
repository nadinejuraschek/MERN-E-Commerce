const   express         = require("express"),
        router          = express.Router(),
        userController  = require("../controllers/user");

router.get("/", userController.login);

module.exports = router;