const Router = require('express');
const router = new Router();
const clientVisits = require('../controller/client-visits.controller');

router.get('/client-visits', clientVisits.getClientVisits);


module.exports = router;
