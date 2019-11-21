import BaseService from './BaseService';

class UserService extends BaseService {
  update({ name, email, oldPassword, password, confirmPassword }) {
    return this.api.put('/users', {
      name,
      email,
      oldPassword,
      password,
      confirmPassword,
    });
  }
}

export default new UserService();
