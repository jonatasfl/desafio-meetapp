import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = Router();

routes.get('/', (req, res) => {
  res.send('API MeetApp');
});

// Session
routes.post('/session', SessionController.store);

// Users
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users', authMiddleware, UserController.update);
routes.delete('/users/:id', authMiddleware, UserController.destroy);

export default routes;
