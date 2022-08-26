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
}
