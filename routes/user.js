const {register,login}=require('../contollers/user');
const express = require('express');

const router = new express.Router();

router.post('/register',register);
router.get('/login',login);

module.exports = router;