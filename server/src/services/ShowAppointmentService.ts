import AppointmentController from '../controllers/Appointments.controller';
import { Appointment } from '../models/Appointment';

export default (id: string): Appointment => {
  const appointment = AppointmentController.show(id);

  if (!appointment) {
    throw Error('Appointment not found.');
  }

  return appointment;
};
