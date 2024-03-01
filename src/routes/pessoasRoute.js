const { Router } = require('express');
const PeopleController = require('../controllers/PeopleController')

const peopleController = new PeopleController();

const router = Router();
router.get('/pessoas', (req, res) =>
  peopleController.getAll(req, res)
);

module.exports = router;
