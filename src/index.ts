import app from './server/app';
import dotenv from 'dotenv';
import 'module-alias/register';
import 'express-async-errors';

import { connectDb } from './database/sequelize';

//Config enviroments
dotenv.config();

app.set('port', process.env.PORT ?? 3000);

const main = async () => {
  await connectDb();
  app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
  });
};

main();
