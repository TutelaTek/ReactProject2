const express = require('express');
const router = express.Router();
const controller = require('../Controllers/bookController');


// list all routes
router.get('/books', controller.book_list);
router.post('/createBook', controller.post_book);
router.post('/deleteBook', controller.delete_book);
router.put('/updateBook/:id', controller.update_book);
router.get('/book/:id', controller.get_one);

module.exports = router;