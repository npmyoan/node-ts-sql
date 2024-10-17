import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import 'express-compression';
import helloRouter from './routes/HelloRouter';
import { LogError } from './utils/looger';

//Initializations
const app: Application = express();
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', helloRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  LogError(err.message);
});

export default app;
