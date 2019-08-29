const router = require("express").Router();
const booksController = require('../../controllers/bookController');

router.route('/api/books')
    .get(booksController.findAll)
    .post(booksController.create);

router.route('/api/books/:id')
    .delete(booksController.remove);