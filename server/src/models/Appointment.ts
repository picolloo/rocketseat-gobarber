import { uuid } from 'uuidv4';

export interface Appointment {
  id: string;
  provider: string;
  date: Date;
}

export default function Appointment(provider: string, date: Date): Appointment {
  return { id: uuid(), provider, date };
}
