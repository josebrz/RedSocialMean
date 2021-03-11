const {Router} = require('express');
const router = Router();
const config = require('../config');

//User Module
const userRouter = require('../components/user/user.router');

const v = 'v1';

//user routes
router.use(`/${v}/user`, userRouter);

module.exports = router;
