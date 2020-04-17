import { Router } from 'express';
import { parseISO } from 'date-fns';

import AppointmentController from '../controllers/Appointments.controller';
import CreateAppointmentService from '../services/CreateAppointmentService';

const router = Router();

router.get('/', async (req, res) => {
  const appointments = await AppointmentController.index();
  return res.json({ appointments });
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const appointment = AppointmentController.show(id);

  if (!appointment) {
    return res.status(404).json({ message: 'Appointment not found' });
  }

  return res.status(201).json(appointment);
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
