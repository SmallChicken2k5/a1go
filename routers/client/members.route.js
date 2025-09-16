const express = require('express');
const router = express.Router();
const controller = require('../../controllers/client/member.controller');


router.get('/', controller.index);

module.exports = router;