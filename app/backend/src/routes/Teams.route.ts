import * as express from 'express';
import TeamsController from '../controllers/Teams.controller';

const router = express.Router();

router.get('/', TeamsController.getAll);

router.get('/:id', TeamsController.getById);

export default router;
