import app from '../server';
import book from './book';

app.use('/book', book);
