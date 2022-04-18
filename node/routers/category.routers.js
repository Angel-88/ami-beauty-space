const Router = require('express');
const router = new Router();
const categoryController = require('../controller/category.controller');

router.post('/categories', categoryController.createCategory);
router.get('/categories', categoryController.getCategories);


module.exports = router;
