import { startOfHour } from 'date-fns';

import { Appointment } from '../models/Appointment';
import AppointmentController from '../controllers/Appointments.controller';

interface Request {
  provider: string;
  date: Date;
}

export default ({ provider, date }: Request): Appointment | null => {
  const appointmentDate = startOfHour(date);

  if (AppointmentController.findByDate(appointmentDate)) {
    throw new Error('This appointment is already booked');
  }

  const appointment = AppointmentController.create({
    provider,
    date: appointmentDate,
  });

  return appointment;
};
