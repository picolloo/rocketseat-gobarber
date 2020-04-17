import { Router } from 'express';

import appointmentsRoutes from './appointments.router';

const router = Router();

router.use('/appointments', appointmentsRoutes);

export default router;
