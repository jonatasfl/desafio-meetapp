import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import MeetupController from './app/controllers/MeetupController';
import EnrollmentController from './app/controllers/EnrollmentController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';

import validadeUserStore from './app/validators/UserStore';
import validadeUserUpdate from './app/validators/UserUpdate';
import validadeSessionStore from './app/validators/SessionStore';
import validadeMeetupStore from './app/validators/MeetupStore';

const routes = Router();
const upload = multer(multerConfig);

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

// Meetups
routes.get('/meetups', authMiddleware, MeetupController.index);
routes.post(
  '/meetups',
  authMiddleware,
  validadeMeetupStore,
  MeetupController.store
);

// Meetup Enrollments
routes.get('/meetups/enrollments', authMiddleware, EnrollmentController.index);
routes.post(
  '/meetups/enrollments/:meetup',
  authMiddleware,
  EnrollmentController.store
);

// Files
routes.post(
  '/files',
  authMiddleware,
  upload.single('image'),
  FileController.store
);

export default routes;
