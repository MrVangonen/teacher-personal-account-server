const app = require('express');
const router = new app.Router();
const schedule = require('../controllers/schedule.js')
const lessons = require('../controllers/lessons.js');

router.route('/schedule/:date?').get(schedule.get);

router.route('/lessons/:id?')
  .get(lessons.get);
module.exports = router;