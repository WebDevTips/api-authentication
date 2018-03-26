const express = require('express');
const router = require('express-promise-router')();

const usersController = require('../controllers/users');
const { validateBody, schemas } = require('../helpers/routeHelpers');

router.route('/signup')
    .post(validateBody(schemas.authSchema), usersController.signUp);

router.route('/signin')
    .post(usersController.signIn);

router.route('/home')
    .get(usersController.home);

module.exports = router;
