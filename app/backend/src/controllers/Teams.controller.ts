import { NextFunction, Request, Response } from 'express';
import TeamsService from '../services/Teams.service';

export default class TeamsController {
  static getAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const teams = await TeamsService.getAll();

      return res.status(200).json(teams);
    } catch (err) {
      next(err);
    }
  };

  static getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const team = await TeamsService.getById(id);

      return res.status(200).json(team);
    } catch (err) {
      next(err);
    }
  };
}
