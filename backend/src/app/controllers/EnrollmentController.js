import { isPast } from 'date-fns';

import Meetup from '../models/Meetup';
import MeetupEnrollment from '../models/MeetupEnrollment';
import Mailer from '../../lib/Mail';

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
        .json({ error: 'You cannot enroll in past Meetups' });
    }

    const countSameMeetup = await MeetupEnrollment.count({
      where: { meetup_id: req.params.meetup, user_id: req.user_id },
    });

    if (countSameMeetup) {
      return res.status(400).json({
        error: 'You are already enrolled in this Meetup',
      });
    }

    const countSameDate = await MeetupEnrollment.count({
      where: { user_id: req.user_id },
      include: [{ model: Meetup, as: 'meetup', where: { date: meetup.date } }],
    });

    if (countSameDate) {
      return res.status(400).json({
        error: 'You are already enrolled in a Meetup at the same time',
      });
    }

    const enrollment = await MeetupEnrollment.create({
      user_id: req.user_id,
      meetup_id: req.params.meetup,
    });

    await Mailer.sendMail({
      to: 'jonatas.lizandro@meioambiente.mg.gov.br',
      subject: 'Nova Inscrição',
      text: `O usuário ${req.user_name} se inscreveu em seu Meetup ${meetup.title}`,
    });

    return res.json(enrollment);
  }
}

export default new EnrollmentController();
