import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export interface ErrorHandler extends Error {
  status?: number;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRequest extends Request {
  auth?: JwtPayload | string;
}
