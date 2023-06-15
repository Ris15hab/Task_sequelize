const express = require('express');
const {add,remove} = require('../contollers/vehicle');
const {verifyToken} = require('../middleware/auth');

const router = new express.Router();

router.post('/add',verifyToken,add);
router.delete('/remove',verifyToken,remove);

module.exports = router;