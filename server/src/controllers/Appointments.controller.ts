import { isEqual } from 'date-fns';

import AppointmentModel, { Appointment } from '../models/Appointment';

interface CreateAppointmentDTO {
  provider: string;
  date: Date;
}

const appointments: Appointment[] = [];

const index = (): Appointment[] => {
  return appointments;
};

const show = (id: string): Appointment | null => {
  return appointments.find(app => app.id === id) || null;
};

const create = ({
  provider,
  date,
}: CreateAppointmentDTO): Appointment | null => {
  const appointment = AppointmentModel(provider, date);

  if (findByDate(date)) return null;

  appointments.push(appointment);

  return appointment;
};

const findByDate = (date: Date): Appointment | null => {
  const foundAppointment = appointments.find(app => isEqual(app.date, date));
  return foundAppointment || null;
};

export default {
  index,
  show,
  create,
  findByDate,
};
