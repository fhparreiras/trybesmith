import IUser from '../interfaces/userInterface';
import HttpException from '../shared/http.exception';

const checkUsername = (user: IUser) => {
  if (!user.username) {
    throw new HttpException(400, '"username" is required'); 
  }
  if (typeof user.username !== 'string') {
    throw new HttpException(422, '"username" must be a string'); 
  }
  if (user.username.length < 3) {
    throw new HttpException(422, '"username" length must be at least 3 characters long');
  }
};

const checkClasse = (user: IUser) => {
  if (!user.classe) {
    throw new HttpException(400, '"classe" is required'); 
  }
  if (typeof user.classe !== 'string') {
    throw new HttpException(422, '"classe" must be a string'); 
  }
  if (user.classe.length < 3) {
    throw new HttpException(422, '"classe" length must be at least 3 characters long');
  }
};

const checkLevel = (user: IUser) => {
  if (user.level === undefined) {
    throw new HttpException(400, '"level" is required'); 
  }
  if (typeof user.level !== 'number') {
    throw new HttpException(422, '"level" must be a number'); 
  }
  if (user.level < 1) {
    throw new HttpException(422, '"level" must be greater than or equal to 1');
  }
};

const checkPassword = (user: IUser) => {
  if (!user.password) {
    throw new HttpException(400, '"password" is required'); 
  }
  if (typeof user.password !== 'string') {
    throw new HttpException(422, '"password" must be a string'); 
  }
  if (user.password.length < 8) {
    throw new HttpException(422, '"password" length must be at least 8 characters long');
  }
};

const userValidations = (user: IUser) => {
  checkUsername(user);
  checkClasse(user);
  checkLevel(user);
  checkPassword(user);
};

export default userValidations;
