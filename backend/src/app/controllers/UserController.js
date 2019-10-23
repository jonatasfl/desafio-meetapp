import User from '../models/User';

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (e) {
      return res.status(500).json({ error: 'Failed to list users' });
    }
  }

  async store(req, res) {
    try {
      const userExists = await User.findOne({
        where: { email: req.body.email },
      });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
      }

      const user = await User.create(req.body);
      return res.json(user);
    } catch (e) {
      return res.status(500).json({ error: 'Failed to create user' });
    }
  }

  async destroy(req, res) {
    const user = await User.destroy({ where: { id: req.params.id } });
    return user
      ? res.send()
      : res.status(404).json({ error: 'User not found' });
  }
}

export default new UserController();
