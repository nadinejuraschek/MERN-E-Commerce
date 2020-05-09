const   express             = require('express'),
        router              = express.Router(),
        { read, create, remove, update, list, listSearch, listRelated, listCategories, listBySearch, photo, productById }             = require('../controllers/product'),
        { requireSignin, isAuth, isAdmin }      = require('../controllers/auth'),
        { userById }      = require('../controllers/user');

router.get("/product/:productId", read);
router.post("/product/create/:userId", requireSignin, isAuth, isAdmin, create);
router.delete(
    "/product/:productId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    remove
);
router.put(
    "/product/:productId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    update
);
        
router.get("/products", list);
router.get("/products/search", listSearch);
router.get("/products/related/:productId", listRelated);
router.get("/products/categories", listCategories);
router.post("/products/by/search", listBySearch);
router.get("/product/photo/:productId", photo);
        
router.param("userId", userById);
router.param("productId", productById);
        
module.exports = router;