import { LogError } from '../../utils/looger';
import { type IUser, userEntity } from '../entities/user.entity';

//CRUD

/**
 * Method to obtain all Users from Collection "Users" in Mongo Server
 */
export const GetAlUser = async (): Promise<IUser[] | undefined> => {
  try {
    const userModel = userEntity();
    return await userModel.find({ isDelete: false });
  } catch (error) {
    LogError(`[ORM ERROR]: Getting All Users:  ${error}`);
  }
};

//Todo:
// GET - By ID
// GET - By EMAIl
// DELETE - By ID
// CREATE
// UPDATE - BY ID
