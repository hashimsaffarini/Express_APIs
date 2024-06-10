const router = require('express').Router();

UserRoutes = require('./user');

CourseRoutes = require('./course');

router.use('/user', UserRoutes);

router.use('/course', CourseRoutes);

module.exports = router;