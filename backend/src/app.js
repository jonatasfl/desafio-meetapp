import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import logger from 'morgan';
// import { resolve } from 'path';

import routes from './routes';
import './database';

// dotenv.config({ path: resolve(__dirname, '..', '.env') });

class App {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(logger('dev'));
    this.express.use(express.json());
    this.express.use(cors());
  }

  routes() {
    this.express.use(routes);
  }
}

export default new App().express;
