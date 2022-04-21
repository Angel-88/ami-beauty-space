const Router = require('express');
const router = new Router();
const totalPriceByClientController = require('../controller/total-price-by-client.controller');

router.get('/total-price-by-client', totalPriceByClientController.getTotalPriceByClient);


module.exports = router;
