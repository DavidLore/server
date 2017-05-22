var express     = require('express');
//import userRoutes from './user.route';
var globalRoutes = require('./global.route');
var xyzRoutes = require('./xyz.route');

var router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) => {
  let x = 5;
  console.log(x + 15);
  res.send('OK66' + 5);
});

// mount user routes at /users
//router.use('/users', userRoutes);

// mount api routes at /api
router.use('/global', globalRoutes);
router.use('/xyz', xyzRoutes);

module.exports = router;
