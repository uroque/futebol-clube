import 'dotenv/config';
import { Response, NextFunction } from 'express';
import { verify, Secret } from 'jsonwebtoken';
import { IRequest } from '../interfaces';

const authToken = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const jwtSecret: Secret = process.env.JWT_SECRET as string;

    const decoded = verify(token, jwtSecret);

    // if (decoded) return res.status(200).json({ role })
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

export default authToken;
