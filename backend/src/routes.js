import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  res.send('API MeetApp');
});

export default routes;
