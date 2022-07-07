const express = require('express');
const router = express.Router();
const {getAllNumbers, addNumbers} = require('../controllers/phone')

router.route('/phone').get(getAllNumbers).post(addNumbers)

module.exports = router
