import { parseISO, isPast } from 'date-fns';

import Meetup from '../models/Meetup';
import File from '../models/File';
import User from '../models/User';

class MeetupController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const meetups = await Meetup.findAll({
      limit: 10,
      offset: (page - 1) * 10,
      include: [
        { model: File, as: 'image', attributes: ['name', 'path', 'url'] },
        { model: User, as: 'user', attributes: ['name', 'email'] },
      ],
    });
    return res.json(meetups);
  }

  async store(req, res) {
    const data = { ...req.body, user_id: req.user_id };

    if (isPast(parseISO(data.date))) {
      return res.status(400).json({ error: 'This is a past date' });
    }

    const meetup = await Meetup.create(data);
    return res.json(meetup);
  }

  async destroy(req, res) {
    const meetup = await Meetup.findByPk(req.params.id);
    if (meetup.user_id !== req.user_id) {
      return res
        .status(401)
        .json({ error: 'You can only cancel your own meetups' });
    }

    await meetup.destroy();
    return res.send();
  }
}

export default new MeetupController();
