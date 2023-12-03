
const router = require('express').Router();
const { index, show, store, update, delete: destroy } = require('../../controllers/apiMovies.controller');

/*/api/v1/movies*/
router
    .get('/', index)
    .get('/:id', show)
    // .get('/:id/actors', actors)
    .post('/', store)
    .put('/:id', update)
    .delete('/:id', destroy)
module.exports = router;