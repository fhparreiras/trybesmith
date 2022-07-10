import { Request, Response, Router } from 'express';
import userService from '../services/userService';
import generateJWT from '../utils/JWTToken';

const userController = Router();

userController.post('/', async (req: Request, res: Response): Promise<Response> => {
  const user = await userService.createUser(req.body);
  const token = generateJWT(user, user.password);
  return res.status(201).json({ token });
});

export default userController;
