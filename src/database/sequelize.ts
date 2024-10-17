import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/UserModel';

export const sequelize = new Sequelize('sequelize', 'root', '', {
  host: 'localhost',
  port: 3306,
  dialect:
    'mariadb' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
  models: [User],
});

export const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

sequelize.sync({ alter: true });
