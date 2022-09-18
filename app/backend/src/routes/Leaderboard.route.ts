import * as express from 'express';
import LeaderboardController from '../controllers/Leaderboard.controller';

const router = express.Router();

router.get('/home', LeaderboardController.getLeaderboardHome);

router.get('/away', LeaderboardController.getLeaderboardAway);

router.get('/', LeaderboardController.getLeaderboard);

export default router;
