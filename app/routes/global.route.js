var express     = require('express');

var Bear     = require('../models/bear');
var globalCtrl = require('../controllers/global.controller');

var router = express.Router();

router.route('/bears').post(globalCtrl.addBear).get(globalCtrl.getAllBears);

router.route('/bears/:bear_id').get(globalCtrl.getBearById).put(globalCtrl.updateBearById).delete(globalCtrl.deleteBearById);


module.exports = router;
