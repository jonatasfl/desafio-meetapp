import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

import validadeUserStore from './app/validators/UserStore';
import validadeUserUpdate from './app/validators/UserUpdate';
import validadeSessionStore from './app/validators/SessionStore';

const routes = Router();

routes.get('/', (req, res) => {
  res.send('API MeetApp');
});

// Session
routes.post('/session', validadeSessionStore, SessionController.store);

// Users
routes.get('/users', UserController.index);
routes.post('/users', validadeUserStore, UserController.store);
routes.put('/users', authMiddleware, validadeUserUpdate, UserController.update);
routes.delete('/users/:id', authMiddleware, UserController.destroy);

export default routes;
