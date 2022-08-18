import { NextFunction, Request, Response } from 'express';
import { Schema } from 'joi';

const validator = (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
  let error;
  if (req.body[0]) {
    req.body.forEach((entry: string) => {
      ({ error } = schema.validate(entry));
    });
  } else {
    ({ error } = schema.validate(req.body));
  }
  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(Number(code)).json({ message });
  }
  next();
};

export default validator;
