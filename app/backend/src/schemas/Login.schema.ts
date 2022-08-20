import * as Joi from 'joi';

const LoginSchemas = Joi.object({
  email: Joi.string().required().email().messages({
    'any.required': '400|"All fields must be filled"',
    // 'string.email': '400|"Incorrect email or password"',
  }),
  password: Joi.string().required().min(6).messages({
    'any.required': '400|"All fields must be filled"',
    'string.min': '400|"Password must be at least 6 characters long"',
  }),
});

export default LoginSchemas;
