var express     = require('express');
var router = express.Router();
var xyzCtrl = require('../controllers/xyz.controller');

router.route('/getXYZ').get(xyzCtrl.getXYZ);

module.exports = router;
