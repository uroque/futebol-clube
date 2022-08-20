import 'dotenv/config';
import { compareSync } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import UsersModel from '../database/models/Users.model';
import { ILogin } from '../interfaces/index';

export default class LoginService {
  static login = async (body: ILogin) => {
    const { email, password } = body;

    const user = await UsersModel.findOne({ where: { email } });

    console.log(user);

    if (!user) return false;

    if (!compareSync(password, user.password)) return false;

    const env = process.env.JWT_SECRET || 'jwt_secret';

    const token = sign({ username: user.username }, env, {
      expiresIn: '30m',
      algorithm: 'HS256',
    });

    return { token };
  };
}
