import { NextFunction, Request, Response } from 'express';
import MatchesService from '../services/Matches.service';

export default class MatchesController {
  static getAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const matches = await MatchesService.getAll();

      return res.status(200).json(matches);
    } catch (err) {
      next(err);
    }
  };
  static create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newMatch = req.body;

      newMatch.inProgress = true;

      const createMatch = await MatchesService.create(newMatch);

      return res.status(201).json(createMatch);
    } catch (err) {
      next(err);
    }
  };

  static updateProgress = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;

      MatchesService.updateProgress(+id);

      return res.status(200).json({ message: 'Finished' });
    } catch (err) {
      next(err);
    }
  };

  static sameTeam = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { homeTeam, awayTeam } = req.body;

      if (homeTeam === awayTeam) {
        return res.status(401)
          .json({ message: 'It is not possible to create a match with two equal teams' });
      }

      next();
    } catch (err) {
      next(err);
    }
  };
}
