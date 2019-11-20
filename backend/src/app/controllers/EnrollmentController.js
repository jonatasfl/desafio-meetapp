import { isPast } from 'date-fns';

import Meetup from '../models/Meetup';
import MeetupEnrollment from '../models/MeetupEnrollment';

class EnrollmentController {
  async index(req, res) {
    const enrollments = await MeetupEnrollment.findAll({
      where: { user_id: req.user_id },
      include: [{ model: Meetup, as: 'meetup' }],
    });

    return res.json(enrollments);
  }

  async store(req, res) {
    const meetup = await Meetup.findByPk(req.params.meetup);
    if (!meetup) return res.status(404).json({ error: 'Meetup not found' });

    // O usuário deve poder se inscrever em meetups que não organiza
    if (meetup.user_id === req.user_id) {
      return res
        .status(401)
        .json({ error: 'You cannot enroll in your own Meetup' });
    }

    if (isPast(meetup.date)) {
      return res
        .status(400)
        .json({ error: 'You cannot enroll in past meetups' });
    }
    // TODO: O usuário não pode se inscrever em dois meetups que acontecem no mesmo horário

    // User cannot enroll in their own meetup
    const meetupEnroll = await MeetupEnrollment.findOne({
      where: { meetup_id: req.params.meetup, user_id: req.user_id },
    });

    if (meetupEnroll) {
      return res.status(400).json({
        error: 'You are already enrolled in this Meetup',
      });
    }

    const enrollment = await MeetupEnrollment.create({
      user_id: req.user_id,
      meetup_id: req.params.meetup,
    });

    return res.json(enrollment);
  }
}

export default new EnrollmentController();
