import { NextFunction, Request, Response } from 'express';
import LeaderboardService from '../services/Leaderboard.service';

export default class LeaderboardController {
  static getLeaderboardHome = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const leaderboard = await LeaderboardService.getLeaderboardHome();

      return res.status(200).json(leaderboard);
    } catch (err) {
      next(err);
    }
  };

  static getLeaderboardAway = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const leaderboard = await LeaderboardService.getLeaderboardAway();

      return res.status(200).json(leaderboard);
    } catch (err) {
      next(err);
    }
  };

  static getLeaderboard = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const leaderboard = await LeaderboardService.getLeaderboard();

      return res.status(200).json(leaderboard);
    } catch (err) {
      next(err);
    }
  };
}
