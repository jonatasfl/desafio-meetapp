import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';

import routes from './routes';
import './database';

class App {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
    this.express.use(
      '/img',
      express.static(path.resolve(__dirname, '..', 'tmp', 'img'))
    );
  }

  routes() {
    this.express.use(routes);
  }
}

export default new App().express;
