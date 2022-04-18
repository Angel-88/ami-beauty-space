const Router = require('express');
const router = new Router();
const recordController = require('../controller/record.controller');

router.post('/records', recordController.createRecord);
router.get('/records', recordController.getRecords);


module.exports = router;
