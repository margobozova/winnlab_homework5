import app from './server';
import './data/connectors/';
import './routes/';

app.listen(3005, () => {
  console.log('Server started listening on port 3005.');
});