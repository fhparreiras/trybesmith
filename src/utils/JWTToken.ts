import { sign, SignOptions } from 'jsonwebtoken';
import IUser from '../interfaces/userInterface';

const jwtConfig: SignOptions = {
  expiresIn: '4d',
  algorithm: 'HS256',
};

const generateJWT = (user: Omit<IUser, 'password'>, secret : string) =>
  sign({ user }, secret, jwtConfig);

// const validateToken = async (token) => {
//   if (!token) {
//     const errorMessage = { status: 401, message: 'Token not found' };
//     throw errorMessage;
//   }
//   try {
//     const introspection = await jwt.verify(token, SECRET, jwtConfig);
//     return introspection;
//   } catch (e) {
//     const errorMessage = { status: 401, message: 'Expired or invalid token' };
//     throw errorMessage;
//   }
// };

// const decodeToken = (token) => jwt.decode(token);

export default generateJWT;
