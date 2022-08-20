import * as express from 'express';
import LoginSchemas from '../schemas/Login.schema';
import validator from '../middlewares/Validator';
import LoginController from '../controllers/Login.controller';

// const { emptyEmail, emptyPassword } = require('../middlewares/Login.middleware');

const router = express.Router();

router.post('/', validator(LoginSchemas), LoginController.login);
// router.get('/validate', LoginController);

// router.post('/', emptyEmail, emptyPassword, validator(LoginSchemas), LoginController.Login);

export default router;
