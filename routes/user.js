const   express     = require("express"),
        router  = express.Router();

router.get("/", (req, res) => {
    res.send("Home route is working.");
});

module.exports = router;