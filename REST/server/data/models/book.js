import Mongo from 'mongoose';

const Schema = Mongo.Schema({
  _id: {
    type: String,
  },
  author: {
    type: String,
  },
  name: {
    type: String,
    index: true,
  },
  summary: {
    type: String,
  },
});

const Book = Mongo.model('books', Schema);

export default Book;
