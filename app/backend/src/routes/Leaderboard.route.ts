import * as express from 'express';
import LeaderboardController from '../controllers/Leaderboard.controller';

const router = express.Router();

router.get('/home', LeaderboardController.getLeaderboard);

export default router;
