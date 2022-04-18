const Router = require('express');
const router = new Router();
const scheduleController = require('../controller/schedule.controller');

router.post('/schedules', scheduleController.createSchedule);
router.get('/schedules', scheduleController.getSchedules);


module.exports = router;
