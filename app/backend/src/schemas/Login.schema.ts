import * as Joi from 'joi';

const fieldFilled = '400|All fields must be filled';
export default class LoginSchemas {
  static joiLoginSchemas = Joi.object({
    email: Joi.string().required().email().empty('')
      .messages({
        'any.required': fieldFilled,
        'any.empty': fieldFilled,
        // 'string.email': '400|Incorrect email or password',
      }),
    password: Joi.string().required().min(6).empty('')
      .messages({
        'any.required': fieldFilled,
        'any.empty': fieldFilled,
        'string.min': '400|Password must be at least 6 characters long',
      }),
  });
}
