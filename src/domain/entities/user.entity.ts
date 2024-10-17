import mongoose from 'mongoose';
export type IUser = {
  name: string;
  email: string;
  age: string;
};

export const userEntity = () => {
  const userSchema = new mongoose.Schema<IUser>({
    name: String,
    email: String,
    age: Number,
  });

  return mongoose.model('Users', userSchema);
};
