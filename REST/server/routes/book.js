import express, { Router } from 'express';
import Book from '../data/models/book';

const router = express.Router();

router.post('/', async (req, res) => {
  res.send(await Book.create(req.body));
});

router.get('/:bookId', async(req, res) => {
  await Book.findById(req.params.bookId, (err, book) => {
    if (err) {
      res.send(err);
    } else {
      res.send(book);
    }
  });
});

router.put('/:bookId', async(req, res) => {
  await Book.findByIdAndUpdate(req.params.bookId, req.body, (err, book) => {
    if(err) {
      res.send(err);
    } else {
      res.send(`${book._id} book was changed`);
    }
  })
});

router.delete('/:bookId', async(req, res) => {
  await Book.findByIdAndRemove(req.params.bookId, (err, book) => {
    if(err) {
      res.send(err);
    } else {
      res.send(`${book._id} book was deleted`);
    }
  })
});

export default router;