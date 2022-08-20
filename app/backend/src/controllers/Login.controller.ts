import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';
import LoginService from '../services/Login.service';

export default class LoginController {
  static login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const authorized = await LoginService.login(req.body);

      if (!authorized) {
        return res.status(401).json({ message: 'Incorrect email or password' });
      }

      return res.status(200).json(authorized);
    } catch (err) {
      next(err);
    }
  };
}
