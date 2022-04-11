const Router = require('express');
const router = new Router();
const clientController = require('../controller/client.controller');

router.post('/clients', clientController.createClient);
router.get('/clients', clientController.getClients);


module.exports = router;