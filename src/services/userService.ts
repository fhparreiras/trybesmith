import IUser from '../interfaces/userInterface';
import userModel from '../models/userModel';
// import HttpException from '../shared/http.exception';
import userValidations from '../utils/userValidations';

const createUser = async (user: IUser): Promise<IUser> => {
  userValidations(user);
  const { insertId } = await userModel.createUser(user);
  const newUser = user;
  newUser.id = insertId;
  return newUser;
};

export default { createUser };
