const Router = require('express');
const router = new Router();
const totalByCategoryController = require('../controller/total-by-category.controller');

router.get('/total-by-category', totalByCategoryController.getTotalByCategory);


module.exports = router;
