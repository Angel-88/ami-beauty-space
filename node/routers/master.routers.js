const Router = require('express');
const router = new Router();
const masterController = require('../controller/master.controller');

router.post('/masters', masterController.createMaster);
router.get('/masters', masterController.getMasters);


module.exports = router;
