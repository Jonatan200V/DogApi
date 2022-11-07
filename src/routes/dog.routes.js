const { Router } = require('express');
// Importar todos los routers;
const {
  getAllDogs,
  getOneDog,
  postCreateDog,
  updateDog,
  deleteDog,
} = require('../controllers/dog.controller.js');
const { existRace, updateRace } = require('../middlewares/dog.middlewares.js');
const router = Router();
// Configurar los routers
router.get('/dogs', getAllDogs);
router.get('/dogs/:id', getOneDog);
router.post('/dogs', existRace, postCreateDog);
router.put('/dogs/:id', updateRace, updateDog);
router.delete('/dogs/:id', deleteDog);
module.exports = router;
