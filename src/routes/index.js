const router = require('express').Router();
router.use('/employees', require('./employee.routes'));
module.exports = router;
