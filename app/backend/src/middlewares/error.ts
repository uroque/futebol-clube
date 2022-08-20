import { Request, Response, NextFunction } from 'express';
import { ErrorHandler } from '../interfaces';

const errorMidleware = (error: ErrorHandler, _req: Request, res: Response, _next: NextFunction) => {
  console.log(error);
  if (error.status) {
    return res.status(error.status).json(error.message);
  }
  return res.status(500).json({ message: 'vixe' });
};

export default errorMidleware;
