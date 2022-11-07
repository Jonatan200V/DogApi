const { Router } = require('express');
const {
  getAllTemperaments,
} = require('../controllers/temperaments.controller');

const router = Router();

router.get('/temperaments', getAllTemperaments);

module.exports = router;
