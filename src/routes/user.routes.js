const { Router } = require('express');
const {
  createUser,
  getAllUser,
  updateUser,
  getUser,
} = require('../controllers/user.controllers');
const { createUserVerify } = require('../middlewares/user.middleware');

const router = Router();

router.get('/user', getAllUser);
router.post('/user', createUserVerify, createUser);
router.put('/user/:id', updateUser);
router.post('/user/register', getUser);
module.exports = router;
