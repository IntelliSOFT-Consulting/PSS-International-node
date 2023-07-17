import express from 'express';
import categoryRoutes from './categories';
import versionRoutes from './versions';
import subscriberRoutes from './subscribers';
import logRoutes from './logs';
import dictionaryRoutes from './dictionary';
import systemComponentRoutes from './systemComponents';

const router = express.Router();

router.use('/indicators', categoryRoutes);
router.use('/versions', versionRoutes);
router.use('/subscribers', subscriberRoutes);
router.use('/logs', logRoutes);
router.use('/dictionary', dictionaryRoutes);
router.use('/systemComponents', systemComponentRoutes);

export default router;
