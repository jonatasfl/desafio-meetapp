import { format, isPast } from 'date-fns';
import { Op } from 'sequelize';

import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';
import MeetupEnrollment from '../models/MeetupEnrollment';
import Mailer from '../../lib/Mail';

class EnrollmentController {
  async index(req, res) {
    const enrollments = await MeetupEnrollment.findAll({
      where: { user_id: req.user_id },
      include: [
        {
          model: Meetup,
          as: 'meetup',
          where: { date: { [Op.gte]: new Date() } },
          include: [
            { model: File, as: 'image', attributes: ['name', 'path', 'url'] },
            { model: User, as: 'user', attributes: ['name', 'email'] },
          ],
        },
      ],
      order: [[{ model: Meetup, as: 'meetup' }, 'date', 'ASC']],
    });

    return res.json(enrollments);
  }

  async store(req, res) {
    const meetup = await Meetup.findByPk(req.params.meetup, {
      include: [{ model: User, as: 'user', attributes: ['name', 'email'] }],
    });
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

    const countSameMeetup = await MeetupEnrollment.count({
      where: { meetup_id: req.params.meetup, user_id: req.user_id },
    });

    if (countSameMeetup) {
      return res.status(400).json({
        error: 'You are already enrolled in this meetup',
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
      to: `${meetup.user.name} <${meetup.user.email}>`,
      subject: 'Nova Inscrição',
      template: 'enrollment/new',
      context: {
        owner: meetup.user.name,
        user: req.user_name,
        userEmail: req.user_email,
        meetupTitle: meetup.title,
        meetupDate: format(meetup.date, "dd/MM/yyyy 'às' HH:mm'h'"),
      },
    });

    return res.json(enrollment);
  }

  async destroy(req, res) {
    try {
      const enrollment = await MeetupEnrollment.findByPk(req.params.id, {
        include: [{ model: Meetup, as: 'meetup' }],
      });

      if (enrollment.user_id !== req.user_id) {
        return res
          .status(401)
          .json({ error: 'You can only cancel your own enrollments' });
      }

      if (isPast(enrollment.meetup.date)) {
        return res
          .status(400)
          .json({ error: 'You cannot cancel enrollment in past meetups' });
      }

      await enrollment.destroy();
      return res.send();
    } catch (e) {
      return res
        .status(500)
        .json({ error: 'Failed to cancel enrollment', details: e });
    }
  }
}

export default new EnrollmentController();
