const express = require('express');
const passport = require('passport');

const controller = require('../controllers/user.controller');

const router = express.Router();

router.post('/signUp', controller.create);
router.post('/login', passport.authenticate('local', { session: false }), controller.login);
router.get('/me', passport.authenticate('jwt', { session: false }), controller.getProfile);
router.post('/me/courses', passport.authenticate('jwt', { session: false }), controller.addCourses);
router.get(
  '/me/courses/:courseId/classes',
  passport.authenticate('jwt', { session: false }),
  controller.getClasses,
);

module.exports = router;
