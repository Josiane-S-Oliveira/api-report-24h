import { Router as routes} from 'express';

import UplinkController from './controllers/UplinkController';

routes = routes();
routes.get('/api/devices24h/:id', UplinkController.index);

export default routes;