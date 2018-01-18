import Mongo from 'mongoose';
import { db } from '../../config';

Mongo.Promise = global.Promise; // async await for mongo

const { host, port, database } = db;

const options = {
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 1000,
  poolSize: 50,
  useMongoClient: true,
};

const connectionURL = `mongodb://${host}:${port}/${database}`;

Mongo.connect(connectionURL, options)
  .then(() => {
    console.log(`Connected on port: ${port} to mongoDB`);
  }).catch((err) => {
    console.log(err);
  });
