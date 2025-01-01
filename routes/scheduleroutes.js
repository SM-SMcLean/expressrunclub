const express = require('express');
const controller = require('./../controllers/schedulecontrollers');
const router = express.Router();


router.get('/', controller.getSchedule);

router.get('/new', controller.getAddNewRun);

router.get('/edit/:id', controller.selectRun);

router.post('/new', controller.postNewRun);

router.post('/edit/:id', controller.updateRun);

router.post('/del/:id', controller.deleteRun);

module.exports = router;