import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

//Initializations
const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

export default app;
