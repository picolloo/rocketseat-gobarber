import { Router } from 'express';
import { parseISO } from 'date-fns';

import AppointmentController from '../controllers/Appointments.controller';
import ShowAppointmentService from '../services/ShowAppointmentService';
import CreateAppointmentService from '../services/CreateAppointmentService';

const router = Router();

router.get('/', async (req, res) => {
  const appointments = await AppointmentController.index();
  return res.json({ appointments });
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const appointment = ShowAppointmentService(id);

    return res.status(201).json(appointment);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { provider, date } = req.body;

    const parsedDate = parseISO(date);

    const appointment = CreateAppointmentService({
      provider,
      date: parsedDate,
    });

    return res.json({ appointment });
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
});

export default router;
