import Meetup from '../models/Meetup';
import File from '../models/File';

class MeetupController {
  async index(req, res) {
    const meetups = await Meetup.findAll({
      include: [
        { model: File, as: 'image', attributes: ['name', 'path', 'url'] },
      ],
    });
    return res.json(meetups);
  }

  async store(req, res) {
    const data = { ...req.body, user_id: req.user_id };
    const meetup = await Meetup.create(data);
    return res.json(meetup);
  }
}

export default new MeetupController();
