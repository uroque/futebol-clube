import * as express from 'express';
import authToken from '../middlewares/authToken';
import MatchesController from '../controllers/Matches.controller';

const router = express.Router();

router.get('/', MatchesController.getAll);

router.post('/', authToken, MatchesController.sameTeam, MatchesController.create);

router.patch('/:id/finish', MatchesController.updateProgress);

export default router;
