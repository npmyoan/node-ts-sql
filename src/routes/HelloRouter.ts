import express, { type Request, type Response } from 'express';
import { HelloController } from '../controller/HelloController';
import { LogInfo } from '../utils/looger';
import { User } from '../models/UserModel';

const router = express.Router();

router.route('/').get(async (req: Request, res: Response) => {
  const { name } = req.query;
  LogInfo(`Query params: ${name}`);

  const message = await new HelloController().getMessage(name as string);
  const user = await User.create({ name: 'Yoan', email: 'yoan@yoan.com', password: '123456' });
  res.json({
    message,
    user,
  });
});

export default router;
