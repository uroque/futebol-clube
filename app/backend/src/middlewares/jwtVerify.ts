import 'dotenv/config';
import { Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { IRequest } from '../interfaces';

const authToken = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const jwtSecret = process.env.JWT_SECRET || 'jwt_secret';

    const decoded = verify(token, jwtSecret);

    req.auth = decoded;
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

exports = { authToken };
