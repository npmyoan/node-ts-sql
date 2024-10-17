import { LogError, LogSuccess } from '../utils/looger';
import mongoose from 'mongoose';

export const connectDb = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI ?? '');
    LogSuccess(`DB connected host ${db.connection.host} on port ${db.connection.port}`);
  } catch (error) {
    LogError('[DB conenct] error connect to db');
  }
};
