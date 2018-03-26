const express = require('express');
const router = require('express-promise-router')();

const usersController = require('../controllers/users');

router.route('/signup')
    .post(usersController.signUp);

router.route('/signin')
    .post(usersController.signIn);

router.route('/home')
    .get(usersController.home);

module.exports = router;
