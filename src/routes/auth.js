// auth routes
const { Router } = require('express')
const { create, getUsername } = require('../controllers/auth')
const { Authorize } = require('../middlewares/validateJWT');

const router = Router();

router.post('/create', create)
router.get('/get', Authorize, getUsername )

module.exports = router;