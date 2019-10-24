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

  async update(req, res) {
    const { email, oldPassword } = req.body;
    const user = await User.findByPk(req.user_id);

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });
      if (userExists) {
        return res.status(400).json({ error: 'Email already in use' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name } = await user.update(req.body);

    return res.json({ id, name, email });
  }

  async destroy(req, res) {
    const user = await User.destroy({ where: { id: req.params.id } });
    return user
      ? res.send()
      : res.status(404).json({ error: 'User not found' });
  }
}

export default new UserController();
