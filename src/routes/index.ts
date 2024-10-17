/**
 *
 *Root Router
 *Redirections to other routers
 */

import express, { Application, Router, type Request, type Response } from 'express';
import helloRouter from './HelloRouter';

const server: Application = express();

const rootRouter = Router();
