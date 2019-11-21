import BaseService from './BaseService';

class SessionService extends BaseService {
  authenticate(email, password) {
    return this.api.post('/session', { email, password });
  }
}

export default new SessionService();
