import BaseService from './BaseService';

class MeetupService extends BaseService {
  getAll() {
    return this.api.get('/meetups/my');
  }
}

export default new MeetupService();
