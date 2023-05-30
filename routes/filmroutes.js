const express = require('express')
const filmsRouter = express.Router();
// const checkApiKey = require('../middlewares/auth_api_key')
const filmsController = require("../controllers/filmsController")
// CRUD --> CREATE, READ, UPDATE, DELETE

// http://localhost:3000/api/film


filmsRouter.post('/:title?', filmsController.createFilm)

filmsRouter.get('/:title?', filmsController.getFilm)

filmsRouter.put('/:title?', filmsController.editFilm)

filmsRouter.delete('/:title?', filmsController.deleteFilm)

module.exports = filmsRouter;
