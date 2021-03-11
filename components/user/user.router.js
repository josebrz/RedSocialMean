const express = require('express');
const ctrl = require('./user.controller');
const router = express.Router();

router.get('/:id', ctrl.get);
router.post('/', ctrl.create);

module.exports = router;

