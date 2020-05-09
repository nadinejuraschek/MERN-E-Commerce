const   express             = require('express'),
        router              = express.Router(),
        { read, create, update, remove, list, categoryById }  = require('../controllers/category'),
        { requireSignin, isAuth, isAdmin }      = require('../controllers/auth'),
        { userId }          = require('../controllers/user');

router.get('/category/:categoryId', read);

router.post('/category/create/:userId', requireSignin, isAuth, isAdmin, create);
// router.put('/category/:categoryUpdateId/:userId', requireSignin, isAuth, isAdmin, update);
router.put('/category/:categoryId/:userId', requireSignin, isAuth, isAdmin, update);
        
router.delete('/category/:categoryId/:userId', requireSignin, isAuth, isAdmin, remove);
router.get('/categories', list);
        
router.param('categoryId', categoryById);
router.param('userId', userById);
        
module.exports = router;