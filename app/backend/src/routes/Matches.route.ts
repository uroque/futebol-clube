import * as express from 'express';
import MatchesController from '../controllers/Matches.controller';

const router = express.Router();

router.get('/', MatchesController.getAll);

router.post('/', MatchesController.create);
export default router;
